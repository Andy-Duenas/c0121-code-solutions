/* exported capitalizeWord */

function capitalizeWord(word) {
  var result = '';
  word = word.toLowerCase();
  if (word === 'javascript') {
    return 'JavaScript';
  } else {
    result = word[0].toUpperCase();
    result += word.slice(1);
  }
  return result;
}
