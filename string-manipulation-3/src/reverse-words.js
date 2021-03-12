/* eslint-disable no-console */
/* exported reverseWords */
function reverseWords(string) {
  var wordArray = string.split(' ');
  var reversed = '';

  for (var i = 0; i < wordArray.length; i++) {
    var oneWord = '';
    for (var j = wordArray[i].length - 1; j >= 0; j--) {
      oneWord += wordArray[i][j];
    }
    reversed += oneWord + ' ';
  }
  return reversed.trim();
}
