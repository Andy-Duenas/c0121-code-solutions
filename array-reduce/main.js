const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12];

const account = [
  { type: 'deposit', amount: 150 },
  { type: 'deposit', amount: 20 },
  { type: 'withdrawal', amount: 5 },
  { type: 'deposit', amount: 100 },
  { type: 'withdrawal', amount: 25 },
  { type: 'withdrawal', amount: 60 }
];

const traits = [
  { color: 'yellow' },
  { type: 'electric' },
  { name: 'pikachu' },
  { level: 15 },
  { trainer: 'ash' }
];

const sum = numbers.reduce((accumalator, currentValue) => accumalator + currentValue);
console.log('sum', sum);

const product = numbers.reduce((accumalator, currentValue) => accumalator * currentValue);
console.log('product', product);

const balance = account.reduce((accumalator, currentValue) => {
  if (currentValue.type === 'deposit') {
    accumalator.amount += currentValue.amount;
  } else {
    accumalator.amount -= currentValue.amount;
  }
  return accumalator;
});

console.log('balance', balance.amount);

const composite = traits.reduce((accumulator, currentValue) => Object.assign(accumulator, currentValue));
console.log('composite:', composite);
