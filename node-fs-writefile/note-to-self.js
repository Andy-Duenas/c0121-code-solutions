const fs = require('fs');

let results = '';
for (let i = 2; i < process.argv.length; i++) {
  results += process.argv[i] + ' ';
}
results += '\n';

fs.writeFile('./note.txt', results, err => {
  if (err) throw err;
});
