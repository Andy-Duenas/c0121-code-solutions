const takeAChance = require('./take-a-chance');

const promiseObj = takeAChance('Andy');

promiseObj.then(sucess => {
  console.log(sucess);
}, unlucky => {
  console.log(unlucky.message);
});
