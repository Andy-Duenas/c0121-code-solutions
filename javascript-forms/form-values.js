var submitEvent = document.querySelector('#contact-form');

function handleSubmit(event) {
  event.preventDefault();
  var nameForObj = submitEvent.elements.name.value;
  var emailForObj = submitEvent.elements.email.value;
  var messageForObj = submitEvent.elements.message.value;

  var objInfo = {
    name: nameForObj,
    email: emailForObj,
    message: messageForObj
  };
  console.log(objInfo);
  submitEvent.reset();
}

submitEvent.addEventListener('submit', handleSubmit);
