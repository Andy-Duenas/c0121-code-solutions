let currentCount = 3;

var id = setInterval(() => {
  if (currentCount === 0) {
    console.log('Blast off!');
    clearInterval(id);
  } else {
    console.log(currentCount);
    currentCount--;
  }
}, 1000);
