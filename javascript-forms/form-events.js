function handleFocus(event) {
  console.log('focus event fired');
  console.log('event.target.name', event.target.name);
}
function handleBlur(event) {
  console.log('blur event fired');
  console.log('event.target.name', event.target.name);
}

function handleInput(event) {
  console.log('value of', event.target.name, ':', event.target.value);
}

var $focusEvent = document.querySelector('#user-name');
var $blurEvent = document.querySelector('#user-email');
var $inputEvent = document.querySelector('#user-message');

$focusEvent.addEventListener('focus', handleFocus);
$blurEvent.addEventListener('focus', handleFocus);
$inputEvent.addEventListener('focus', handleFocus);

$focusEvent.addEventListener('blur', handleBlur);
$blurEvent.addEventListener('blur', handleBlur);
$inputEvent.addEventListener('blur', handleBlur);

$focusEvent.addEventListener('input', handleInput);
$blurEvent.addEventListener('input', handleInput);
$inputEvent.addEventListener('input', handleInput);
