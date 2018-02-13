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
