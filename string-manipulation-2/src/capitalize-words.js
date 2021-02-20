/* exported capitalizeWords */
function capitalizeWords(string) {
  var lowerCaseString = string.toLowerCase();
  var returnResult = '';
  returnResult += string[0].toUpperCase();
  for (var i = 1; i < string.length; i++) {
    if (string[i] === ' ') {
      returnResult += lowerCaseString[i].toUpperCase();
      i++;
      returnResult += lowerCaseString[i].toUpperCase();
    } else {
      returnResult += lowerCaseString[i];
    }
  }
  return returnResult;
}
