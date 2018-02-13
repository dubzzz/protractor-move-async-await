describe('[promise-manager] angularjs homepage todo list', function() {
  it('should add a todo', function() {
    browser.get('http://localhost:3000/index.html');
    element(by.model('todoList.todoText')).sendKeys('write first protractor test');
    element(by.css('[value="add"]')).click();
    element.all(by.repeater('todo in todoList.todos'))
      .filter(todo => todo.getText().then(label => label.indexOf('#10') !== -1))
      .each(todo => todo.element(by.css('input')).click());
  });
});
