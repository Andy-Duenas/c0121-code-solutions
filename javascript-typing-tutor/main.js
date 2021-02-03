/* eslint-disable no-console */
var sentence = document.querySelector('.text');

function handleTextColor(event) {
  console.log(sentence);
  console.log('hello');
}

sentence.addEventListener('keydown', handleTextColor);
