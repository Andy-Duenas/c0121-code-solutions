/* eslint-disable no-console */
var $tabContainer = document.querySelector('.tab-container');
var $tabList = document.querySelectorAll('.tab');
var $viewList = document.querySelectorAll('.view');

function handleClick(event) {
  console.log('event.target.matches(".tab"):', event.target.matches('.tab'));
  for (var i = 0; i < $tabList.length; i++) {
    if (event.target === $tabList[i]) {
      event.target.className = 'tab active';
    } else {
      $tabList[i].className = 'tab';
    }
  }
  if (event.target.matches('.tab')) {
    var dataView = event.target.getAttribute('data-view');
    for (var j = 0; j < $viewList.length; j++) {
      if (dataView === $viewList[j].getAttribute('data-view')) {
        $viewList[j].className = 'view';
      } else {
        $viewList[j].className = 'view hidden';
      }
    }
  }
}

$tabContainer.addEventListener('click', handleClick);
