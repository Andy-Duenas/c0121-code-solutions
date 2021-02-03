function handleFocus(event) {
  console.log('focus event fired');
  console.log('event.target.name', event.target.name);
}
function handleBlur(event) {
  console.log('blur event fired');
  console.log('event.target.name', event.target.name);
}

function handleInput(event) {
  console.log('event.target.name', event.target.name);
  console.log('value of name', event.target.value);
}

var focusEvent = document.querySelector('input[type="text"]');
var blurEvent = document.querySelector('input[type="email"]');
var inputEvent = document.querySelector('textarea');

focusEvent.addEventListener('focus', handleFocus);
blurEvent.addEventListener('blur', handleBlur);
inputEvent.addEventListener('input', handleInput);
