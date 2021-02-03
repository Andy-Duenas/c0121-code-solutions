function handleSubmit(event) {
  event.preventDefault();
  console.log(event);
  var inputByIndex = event.target.input[0].value;

  console.log(inputByIndex);
}

var submitEvent = document.forms[0];
submitEvent.addEventListener('submit', handleSubmit);
