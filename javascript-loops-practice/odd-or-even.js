/* exported oddOrEven */
function oddOrEven(numbers) {
  var numOddEven = [];
  for (var i = 0; i < numbers.length; i++) {
    if (numbers[i] % 2 === 0) {
      numOddEven.push('even');
    } else {
      numOddEven.push('odd');
    }
  }
  return numOddEven;
}
