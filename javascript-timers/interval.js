var $heading = document.querySelector('h1');
var counter = 3;
function h1Change() {
  if (counter === 0) {
    $heading.textContent = '~Earth Beeeelooowww Us~';
    clearInterval(intervalID);

  } else {
    $heading.textContent = counter;
    counter--;
  }
}

var intervalID = setInterval(h1Change, 2 * 1000);
