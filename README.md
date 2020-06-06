# Websocket Path Problem

Came across this while working on a new library for Nest and setting up test routes for Websockets. If a Websocket Gateway uses the `path` option in the second parameter, the `path` is not honored when binding the messages to the server. This means that if multiple gateways use the same `@SubscribeMessage()`, both can be activated in the same request. 

## Setup

```sh
git clone git@github.com:jmcdo29/ws-path-problem
yarn OR npm i
yarn start:dev OR npm run start:dev
# open a new terminal
node sendMessage
# notice that there is a response of "Hello World!" in the terminal that sent the request
# but there is also an error in the terminal that started the server.
```

