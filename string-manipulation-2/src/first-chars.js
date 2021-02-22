/* exported firstChars */
function firstChars(length, string) {
  if (length >= string.length) {
    return string;
  }

  var returnResult = '';

  for (var i = 0; i < length; i++) {
    returnResult += string[i];
  }
  return returnResult;
}
