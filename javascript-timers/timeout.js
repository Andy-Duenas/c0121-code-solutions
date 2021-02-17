var $heading = document.querySelector('h1');

function h1Change() {
  $heading.textContent = 'Hello There';
}

setTimeout(h1Change, 2 * 1000);
