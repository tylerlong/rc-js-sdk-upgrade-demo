import RingCentral from '@ringcentral/sdk';
import {Subscriptions} from '@ringcentral/subscriptions';

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

  // create subscription
  const subscriptions = new Subscriptions({
    sdk: rc,
  });
  const subscription = subscriptions.createSubscription();
  subscription.on(subscription.events.notification, (evt: any) => {
    console.log(JSON.stringify(evt, null, 2));
  });
  await subscription
    .setEventFilters(['/restapi/v1.0/account/~/extension/~/message-store'])
    .register();

  // trigger an event
  const r = await platform.get('/restapi/v1.0/account/~/extension/~');
  const extensionId = (await r.json()).id;
  await platform.post('/restapi/v1.0/account/~/extension/~/company-pager', {
    from: {extensionId},
    to: [{extensionId}],
    text: 'Hello world!',
  });
};
main();
