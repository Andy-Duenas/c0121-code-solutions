/* eslint-disable no-console */
var $sentence = document.querySelectorAll('span');
var track = 0;

$sentence[track].className = 'underline';

function handleTextColor(event) {
  if (event.key === $sentence[track].textContent) {
    $sentence[track].className = 'green';
    track++;
    if (track < $sentence.length) {
      $sentence[track].className = 'underline';
    }
  } else {
    $sentence[track].className = 'red';
  }
}

document.addEventListener('keydown', handleTextColor);
