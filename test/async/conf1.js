exports.config = {
  //directConnect:true,
  seleniumAddress: 'http://localhost:4444/wd/hub',
  specs: ['spec.js'],
  jasmineNodeOpts: {defaultTimeoutInterval: 500000},
  SELENIUM_PROMISE_MANAGER: 0
};
