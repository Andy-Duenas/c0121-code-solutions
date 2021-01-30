/* exported reverse */
function reverse(array) {
  var newArray = [];
  var realLength = array.length;
  for (var i = 0; i < realLength; i++) {
    newArray[i] = array.pop();
  }
  return newArray;
}
