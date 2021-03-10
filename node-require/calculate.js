const plus = require('./add');
const minus = require('./subtract');
const over = require('./divide');
const times = require('./multiply');
let results = 0;

if (process.argv[3] === 'plus') {
  results = plus(Number(process.argv[2]), Number(process.argv[4]));
}
if (process.argv[3] === 'minus') {
  results = minus(Number(process.argv[2]), Number(process.argv[4]));
}
if (process.argv[3] === 'over') {
  results = over(Number(process.argv[2]), Number(process.argv[4]));
}
if (process.argv[3] === 'times') {
  results = times(Number(process.argv[2]), Number(process.argv[4]));
}

console.log('results:', results);
