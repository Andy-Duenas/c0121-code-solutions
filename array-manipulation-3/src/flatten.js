/* exported flatten */

function flatten(array) {
  var returnArray = [];
  for (var i = 0; i < array.length; i++) {
    if (Array.isArray(array[i])) {
      for (var j = 0; j < array[i].length; j++) {
        returnArray.push(array[i][j]);
      }
    } else {
      returnArray.push(array[i]);
    }
  }
  return returnArray;
}
