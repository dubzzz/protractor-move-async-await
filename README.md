# Protractor try of async/await

It seems that when moving away from the promise manager some features like `filter` become flaky.

The following repository exposes a proof of concept of the flakiness. It features a very simple AngularJS app with lots of checkboxes (the one of the tutorial of AngularJS).

Here is the way to launch those tests locally.

Please not that the third implementation in test/async get rid oft the `filter` of Protractor.

```bash
npm install
npm run webdriver:update

# Running web-server and web-driver (a shell for each)
npm run start
npm run webdriver:start

# Running the tests
npm run test:async
npm run test:promise-manager
```

Running those tests locally I get the following errors:

```
1) [async] angularjs homepage todo list should add a todo
  Message:
    Failed: ECONNREFUSED connect ECONNREFUSED 127.0.0.1:4444
  Stack:
    Error: ECONNREFUSED connect ECONNREFUSED 127.0.0.1:4444
        at ClientRequest.<anonymous> (C:\protractor-move-async-await\node_modules\selenium-webdriver\http\index.js:238:15)
        at emitOne (events.js:115:13)
        at ClientRequest.emit (events.js:210:7)
        at Socket.socketErrorListener (_http_client.js:401:9)
        at emitOne (events.js:115:13)
        at Socket.emit (events.js:210:7)
        at emitErrorNT (internal/streams/destroy.js:64:8)
        at _combinedTickCallback (internal/process/next_tick.js:138:11)
        at process._tickCallback (internal/process/next_tick.js:180:9)Error
        at ElementArrayFinder.applyAction_ (C:\protractor-move-async-await\node_modules\protractor\lib\element.ts:482:23)
        at ElementArrayFinder.(anonymous function).args [as getText] (C:\protractor-move-async-await\node_modules\protractor\lib\element.ts:96:21)
        at ElementFinder.(anonymous function).args [as getText] (C:\protractor-move-async-await\node_modules\protractor\lib\element.ts:873:14)
        at element.all.filter.todo (C:\protractor-move-async-await\test\async\todo-spec.js:7:28)
        at parentWebElements.map (C:\protractor-move-async-await\node_modules\protractor\lib\element.ts:241:18)
        at Array.map (<anonymous>)
        at getWebElements.then (C:\protractor-move-async-await\node_modules\protractor\lib\element.ts:237:38)
        at <anonymous>
        at process._tickCallback (internal/process/next_tick.js:188:7)
    From asynchronous test:
    Error
        at Suite.<anonymous> (C:\protractor-move-async-await\test\async\todo-spec.js:2:3)
        at Object.<anonymous> (C:\protractor-move-async-await\test\async\todo-spec.js:1:63)
        at Module._compile (module.js:624:30)
        at Object.Module._extensions..js (module.js:635:10)
        at Module.load (module.js:545:32)
        at tryModuleLoad (module.js:508:12)

1 spec, 1 failure
Finished in 3.163 seconds

2) [async #2] angularjs homepage todo list should add a todo
  Message:
    Failed: java.net.ConnectException: Connection refused: connect
...
```
