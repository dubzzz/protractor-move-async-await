exports.config = {
  seleniumAddress: 'http://localhost:4444/wd/hub',
  specs: ['todo-spec.js', 'todo-spec-2.js', 'todo-spec-3.js'],
  SELENIUM_PROMISE_MANAGER: 0
};