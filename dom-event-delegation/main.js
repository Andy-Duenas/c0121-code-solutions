var taskListClick = document.querySelector('.task-list');

function handleClick(event) {
  console.log('event.target:', event.target);
  console.log('event.target.tagName:', event.target.tagName);
  if (event.target.matches('button')) {
    console.log('closest .task-list-item', event.target.closest('.task-list-item'));
    event.target.closest('.task-list-item').remove();
  }
}

taskListClick.addEventListener('click', handleClick);
