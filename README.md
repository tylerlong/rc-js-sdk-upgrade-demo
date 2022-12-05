# RingCentral JS SDK Upgrade Demo

This is a demo project to tell you how to upgrade from 'ringcentral' to '@ringcentral/sdk'.


## Setup

Rename file `.env.sample` to `.env` and edit the file to specify credentials

```
yarn install
```

## Run

### Run the demo for 'ringcentral'

```
yarn test1
```

Please note that, since subscription is a long running process, the command will not exit by itself.


### Run the demo for '@ringcentral/sdk'

```
yarn test2
```

## OAuth demo

[Check here](./src/oauth)


## Subscription demo

[Check here](./src/subscription)
