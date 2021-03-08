/* exported isPalindromic */
function isPalindromic(string) {
  string = string.replace(/\s/g, '');
  var lastIndex = string.length;
  var isSame = '';
  for (var i = 0; i < string.length - 1 / 2; i++) {
    if (string[i] === string[lastIndex - i - 1]) {
      isSame += string[i];
    }
  }
  if (isSame === string) {
    return true;
  } else {
    return false;
  }
}
