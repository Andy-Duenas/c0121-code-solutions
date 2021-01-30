/* exported reverseWord */
function reverseWord(word) {
  var array = [];
  var reverse = '';
  for (var i = 0; i < word.length; i++) {
    array.unshift(word[i]);
  }
  for (var j = 0; j < word.length; j++) {
    reverse += array.shift();
  }
  return reverse;
}
