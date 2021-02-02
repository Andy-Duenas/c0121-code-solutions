var buttonBulb = document.querySelector('.bulb');
var background = document.querySelector('.background');

function handleBulb(event) {
  if (buttonBulb.className === 'bulb') {
    buttonBulb.className = 'bulb-on';
    background.className = 'background-on';
  } else {
    buttonBulb.className = 'bulb';
    background.className = 'background';
  }

}

buttonBulb.addEventListener('click', handleBulb);
