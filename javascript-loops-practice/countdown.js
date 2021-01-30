/* exported countdown */
function countdown(number) {
  var countDownNum = [];
  while (number >= 0) {
    countDownNum.push(number);
    number--;
  }
  return countDownNum;
}
