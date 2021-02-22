/* exported truncate */

function truncate(length, string) {
  var newString = '';
  if (string.length !== 0) {
    if (length > string.length) {
      newString = string + '...';
    } else {
      for (var i = 0; i < length; i++) {
        newString += string[i];
      }
      newString += '...';
    }
  } else {
    newString += '...';
  }
  return newString;
}
