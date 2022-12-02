import SDK from '@ringcentral/sdk';
import localforage from 'localforage';
import {createHash, randomBytes} from 'crypto';

import {buffer2string} from './utils';

const redirectUri = window.location.origin + window.location.pathname;
const rcsdk = new SDK({
  server: process.env.RINGCENTRAL_SERVER_URL,
  clientId: process.env.RINGCENTRAL_CLIENT_ID,
});
const platform = rcsdk.platform();
const urlSearchParams = new URLSearchParams(
  new URL(window.location.href).search
);
const code = urlSearchParams.get('code');
if (code === null) {
  const codeVerifier = buffer2string(randomBytes(32));
  localforage.setItem('codeVerifier', codeVerifier); // save codeVerifier in cookies
  // login
  const loginUrl = platform.loginUrl({
    redirectUri,
    code_challenge_method: 'S256',
    code_challenge: buffer2string(
      createHash('sha256').update(codeVerifier).digest()
    ),
  } as any);
  console.log(loginUrl);
  const link = document.createElement('a');
  link.href = loginUrl;
  link.innerText = 'Login';
  document.body.appendChild(link);
} else {
  // exchange code for token
  (async () => {
    const resp = await platform.login({
      code,
      redirect_uri: redirectUri,
      code_verifier: (await localforage.getItem('codeVerifier'))!, // load codeVerifier from cookies
    });
    const token = await resp.json();
    document.write(JSON.stringify(token, null, 2));
  })();
}
