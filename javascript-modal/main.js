/* eslint-disable no-console */
var openModal = document.querySelector('.button-open');
var closeModal = document.querySelector('.pop-button');
var background = document.querySelector('.pop-out-background');

function handleOpenBackground(event) {
  background.className = 'pop-out-background-on';
}

openModal.addEventListener('click', handleOpenBackground);

function handleClosingBackground(event) {
  background.className = 'pop-out-background';
}

closeModal.addEventListener('click', handleClosingBackground);
