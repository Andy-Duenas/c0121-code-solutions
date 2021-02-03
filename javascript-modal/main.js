/* eslint-disable no-console */
var openModal = document.querySelector('.button-open');
var closeModal = document.querySelector('.pop-button');
var background = document.querySelector('.pop-out-background');

function handleOpenBackground(event) {
  background.style.display = 'flex';
}
function handleClosingBackground(event) {
  background.style.display = 'none';
}
openModal.addEventListener('click', handleOpenBackground);

closeModal.addEventListener('click', handleClosingBackground);
