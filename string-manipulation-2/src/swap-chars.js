/* exported swapChars */
function swapChars(firstIndex, secondIndex, string) {
  var result = '';
  var firstLetter = string[firstIndex];
  var secondLetter = string[secondIndex];
  for (var i = 0; i < string.length; i++) {
    if (i === firstIndex) {
      result += secondLetter;
    } else if (i === secondIndex) {
      result += firstLetter;
    } else {
      result += string[i];
    }
  }
  return result;
}
