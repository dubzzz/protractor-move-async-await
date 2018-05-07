let MakeSequential = function(func){
    let prom = Promise.resolve();
    return (...args) => {
        prom = prom.then(function(){
            return func(...args)
        })
        return prom
    }
}

describe('[async] angularjs homepage todo list', function() {
  it('should add a todo', async function() {
    await browser.get('http://localhost:3000/index.html');
    await element(by.model('todoList.todoText')).sendKeys('write first protractor test');
    await element(by.css('[value="add"]')).click();
    await element.all(by.repeater('todo in todoList.todos'))
      .filter(MakeSequential(todo=>todo.getText().then(label=>label.indexOf('#10') !== -1)))
      .each(MakeSequential(todo=>todo.element(by.css('input')).click()));
  });
});
