describe('[async #2] angularjs homepage todo list', function() {
  it('should add a todo', async function() {
    await browser.get('http://localhost:3000/index.html');
    await element(by.model('todoList.todoText')).sendKeys('write first protractor test');
    await element(by.css('[value="add"]')).click();
    await element.all(by.repeater('todo in todoList.todos'))
      .filter(async todo => {
        const label = await todo.getText();
        return label.indexOf('#10') !== -1;
      })
      .each(async todo => await todo.element(by.css('input')).click());
  });
});
