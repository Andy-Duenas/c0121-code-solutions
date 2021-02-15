/* global uuid, todos */

var $todoForm = document.querySelector('#todo-form');
// querySelector method of the document object is being called with 1 arguement
// css selector id todo-form, return is being assigned to the var var $todoForm
$todoForm.addEventListener('submit', function (event) {
// addEventListener method of the $todoForm object is being called with two arguements,
// the string submit and the anonymous function with one parameter event
// followed by a open curly brace for the definition block
  event.preventDefault();
  // preventDefault method of the event object is being called
  var todo = {
  // an object literal assinged to the var todo
    todoId: uuid.v4(),
    // todoId propety with the value of the return of the v4 method of the uuid object
    task: $todoForm.elements.task.value,
    // task property with the value of the value property of the task objcet of the element object of the $todoForm object
    isCompleted: false
    // isCompleted property has a value of false
  };
  // closing curly brace for the object literal
  todos.push(todo);
  // push method of the todos object is called with one arguement, the var todo
  $todoList.append(renderTodo(todo));
  // append method of the $todosList object is called with one arguement, the return of the renderTodo with the arguement todo
  $todoForm.reset();
  // reset method of the $todosList object is called
});
// closing curly brace for the anonymous function and closing paranthesis for the arguement list

var $todoList = document.querySelector('#todo-list');
// querySelector method of the document object is being called with 1 arguement the string todo-list
$todoList.addEventListener('change', function (event) {
  var todoId = event.target.getAttribute('id');
  for (var i = 0; i < todos.length; i++) {
    if (todos[i].todoId === todoId) {
      todos[i].isCompleted = event.target.checked;
      break;
    }
  }
});

for (var i = 0; i < todos.length; i++) {
  var $todo = renderTodo(todos[i]);
  $todoList.appendChild($todo);
}

function renderTodo(todo) {

  /**
   * <li class="list-group-item">
   *   <div class="form-check d-flex">
   *     <input
   *       type="checkbox"
   *       id="{todo.todoId}"
   *       class="form-check-input">
   *     <label
   *       for="{todo.todoId}"
   *       class="form-check-label flex-grow-1 ml-2">
   *       {todo.task}
   *     </label>
   *   </div>
   * </li>
   */

  var $todo = document.createElement('li');
  $todo.setAttribute('class', 'list-group-item');

  var $formCheck = document.createElement('div');
  $formCheck.setAttribute('class', 'form-check d-flex');

  var $checkbox = document.createElement('input');
  $checkbox.checked = todo.isCompleted;
  $checkbox.setAttribute('id', todo.todoId);
  $checkbox.setAttribute('type', 'checkbox');
  $checkbox.setAttribute('class', 'form-check-input');

  var $label = document.createElement('label');
  $label.setAttribute('for', todo.todoId);
  $label.setAttribute('class', 'form-check-label flex-grow-1 ml-2');
  $label.textContent = todo.task;

  $todo.append($formCheck);
  $formCheck.append($checkbox, $label);

  return $todo;
}
