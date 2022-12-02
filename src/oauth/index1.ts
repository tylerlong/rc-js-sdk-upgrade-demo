import RingCentral from 'ringcentral';

const redirectUri = window.location.origin + window.location.pathname;
const rc = new RingCentral({
  server: process.env.RINGCENTRAL_SERVER_URL,
  appKey: process.env.RINGCENTRAL_CLIENT_ID,
  appSecret: process.env.RINGCENTRAL_CLIENT_SECRET,
  redirectUri,
});
const platform = rc.platform();
const urlSearchParams = new URLSearchParams(
  new URL(window.location.href).search
);
const code = urlSearchParams.get('code');
if (code === null) {
  // login
  const loginUrl = platform.loginUrl({
    redirectUri,
  });
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
    });
    const token = await resp.json();
    document.write(JSON.stringify(token, null, 2));
  })();
}
