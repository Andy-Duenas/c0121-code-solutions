/* exported lastChars */
function lastChars(length, string) {
  if (length >= string.length) {
    return string;
  }
  var last = string.length - length;
  var returnResult = '';

  for (var i = last; i < string.length; i++) {
    returnResult += string[i];
  }
  return returnResult;
}
