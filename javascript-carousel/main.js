/* eslint-disable no-console */
/* eslint-disable eqeqeq */
var $leftSideButton = document.querySelector('.left');
var $rightSideButton = document.querySelector('.right');
var $listOfImgs = document.querySelectorAll('img');
var $listOfCircleButtons = document.querySelectorAll('.circle-button');
var countController = 0;
var idControl = startCountdown();

function startCountdown() {
  var intervalId = setInterval(handleRightShift, 3000);
  return intervalId;
}

function restartTime(id) {
  clearInterval(id);
  var intervalId = setInterval(handleRightShift, 3000);
  return intervalId;
}

function handleSideButtons(event) {
  var classList = event.target.classList;
  if (checkForClass(classList, 'left')) {
    handleLeftShift();
  } else if (checkForClass(classList, 'right')) {
    handleRightShift();
  }
}

function handleLeftShift() {
  if (countController == 0) {
    $listOfImgs[countController].className = 'hidden';
    $listOfCircleButtons[countController].className = 'circle-button';
    countController = $listOfImgs.length - 1;
    $listOfCircleButtons[countController].className = 'circle-button current';
    $listOfImgs[countController].className = 'img';
  } else {
    $listOfImgs[countController].className = 'hidden';
    $listOfCircleButtons[countController].className = 'circle-button';
    countController--;
    $listOfCircleButtons[countController].className = 'circle-button current';
    $listOfImgs[countController].className = 'img';
  }
  idControl = restartTime(idControl);
}

function handleRightShift() {
  if (countController == $listOfImgs.length - 1) {
    $listOfImgs[countController].className = 'hidden';
    $listOfCircleButtons[countController].className = 'circle-button';
    countController = 0;
    $listOfCircleButtons[countController].className = 'circle-button current';
    $listOfImgs[countController].className = 'img';
  } else {
    $listOfImgs[countController].className = 'hidden';
    $listOfCircleButtons[countController].className = 'circle-button';
    countController++;
    $listOfCircleButtons[countController].className = 'circle-button current';
    $listOfImgs[countController].className = 'img';
  }
  idControl = restartTime(idControl);
}

$leftSideButton.addEventListener('click', handleSideButtons);
$rightSideButton.addEventListener('click', handleSideButtons);

function handleBottomButtons(event) {
  var classList = event.target.classList;
  if (checkForClass(classList, 'circle-button')) {
    $listOfImgs[countController].className = 'hidden';
    $listOfCircleButtons[countController].className = 'circle-button';
    countController = event.target.getAttribute('value');
    $listOfCircleButtons[countController].className = 'circle-button current';
    $listOfImgs[countController].className = 'img';
    idControl = restartTime(idControl);
  }
}

addEventListener('click', handleBottomButtons);

function checkForClass(listArray, lookingfor) {
  for (var i = 0; i < listArray.length; i++) {
    if (listArray[i] === lookingfor) {
      return true;
    }
  }
  return false;
}
