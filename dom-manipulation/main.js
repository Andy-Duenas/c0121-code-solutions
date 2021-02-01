var userClicked = 0;

var hotButton = document.querySelector('.hot-button');
var clickCount = document.querySelector('.click-count');

hotButton.addEventListener('click', function () {
  userClicked++;
  clickCount.textContent = userClicked;
  if (userClicked < 4) {
    hotButton.className = 'hot-button cold';
  } else if (userClicked < 7) {
    hotButton.className = 'hot-button cool';
  } else if (userClicked < 10) {
    hotButton.className = 'hot-button tepid';
  } else if (userClicked < 13) {
    hotButton.className = 'hot-button warm';
  } else if (userClicked < 16) {
    hotButton.className = 'hot-button hot';
  } else {
    hotButton.className = 'hot-button nuclear';
  }
})
;
