/* exported capitalizeWord */

function capitalizeWord(word) {
  var result = '';
  word = word.toLowerCase();
  if (word === 'javascript') {
    for (var i = 0; i < word.length; i++) {
      if (word[i] === 'j' || word[i] === 's') {
        result += word[i].toUpperCase();
      } else {
        result += word[i];
      }
    }
  } else {
    result = word[0].toUpperCase();
    result += word.slice(1);
  }
  return result;
}
