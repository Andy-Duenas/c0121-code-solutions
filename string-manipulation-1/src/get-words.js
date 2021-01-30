/* exported getWords */
function getWords(string) {
  var oneWordArray = [];
  if (string.indexOf(' ') !== -1) {
    oneWordArray = string.split(' ');
    return oneWordArray;
  } else if (string.length > 1) {
    oneWordArray.push(string);
  }

  return oneWordArray;
}
