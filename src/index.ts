import RingCentral from 'ringcentral';

const rc = new RingCentral({
  server: process.env.RINGCENTRAL_SERVER_URL,
  appKey: process.env.RINGCENTRAL_CLIENT_ID,
  appSecret: process.env.RINGCENTRAL_CLIENT_SECRET,
});
const platform = rc.platform();

const main = async () => {
  await platform.login({
    username: process.env.RINGCENTRAL_USERNAME,
    extension: process.env.RINGCENTRAL_EXTENSION,
    password: process.env.RINGCENTRAL_PASSWORD,
  });
  const r = await platform.get('/account/~/extension/~');
  console.log(r.json());
};
main();
