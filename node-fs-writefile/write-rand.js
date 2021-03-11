const fs = require('fs');

function randomNum() {
  return Math.random() + '\n';
}

const num = randomNum();

fs.writeFile('./random.txt', num, err => {
  if (err) throw err;
});
