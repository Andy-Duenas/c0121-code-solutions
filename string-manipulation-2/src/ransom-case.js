/* exported ransomCase */

function ransomCase(string) {
  var lowerCaseString = string.toLowerCase();
  var returnString = '';

  for (var i = 0; i < string.length; i++) {
    if (i % 2 === 1) {
      returnString += lowerCaseString[i].toUpperCase();
    } else {
      returnString += lowerCaseString[i];
    }
  }
  return returnString;
}
