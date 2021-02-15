/* exported todos */

var todos = [];
// There is an empty object literal assigned to the variable todos
var previousTodosJSON = localStorage.getItem('javascript-local-storage');
// getItem method of the localStorage object is being called with 1 arguement
// the string java-script-storage, the return of the expression is being assigned
// to the var  previousTodosJSON
if (previousTodosJSON !== null) {
// if statement with the condition of the var  previousTodosJSON is strictly not equal to null
// with a opem curly brace for the code block
  todos = JSON.parse(previousTodosJSON);
// parse method of the JSON object is being called with one arguement, the var preiousTodosJSON
// and the return of the exp is being assigned to the var todos
}
// closing bracket for the if statement

function handleUnload(event) {
// function definition handleUnload with the parameter event
  var todosJSON = JSON.stringify(todos);
  // stringify method of the object JSON is being called with one arguement
  // the return is being assigned to the var todosJSON
  localStorage.setItem('javascript-local-storage', todosJSON);
  // setItem method of the localStorage object is being called with two arguements
  // the string javascript-local-storage and the var todosJSON
}
// closing curly brace for the function definition
window.addEventListener('beforeunload', handleUnload);
// assEventListener method of the window object is being called with two arguements
// the string beforeunload and the var handleUnload;
