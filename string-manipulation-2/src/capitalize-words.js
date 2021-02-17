/* exported capitalizeWords */
function capitalizeWords(string) {
  var lowerCaseString = string.toLowerCase();
  var returnResult = '';
  var isSpace = false;
  returnResult += string[0].toUpperCase();
  for (var i = 1; i < string.length; i++) {
    if (string[i] === ' ') {
      isSpace = true;
    }
    if (isSpace === false) {
      returnResult += lowerCaseString[i];
    }
  }
  return returnResult;
}
