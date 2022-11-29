import RingCentral from '@ringcentral/sdk';

const rc = new RingCentral({
  server: process.env.RINGCENTRAL_SERVER_URL,
  clientId: process.env.RINGCENTRAL_CLIENT_ID,
  clientSecret: process.env.RINGCENTRAL_CLIENT_SECRET,
});
const platform = rc.platform();
const main = async () => {
  await platform.login({
    username: process.env.RINGCENTRAL_USERNAME,
    extension: process.env.RINGCENTRAL_EXTENSION,
    password: process.env.RINGCENTRAL_PASSWORD,
  });
  const r = await platform.get('/restapi/v1.0/account/~/extension/~');
  const json = await r.json();
  console.log(json);
};
main();
