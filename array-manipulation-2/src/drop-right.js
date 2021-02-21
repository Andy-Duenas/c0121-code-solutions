/* exported dropRight */
function dropRight(array, count) {
  if (count >= array.length) {
    return array;
  }
  var newArray = [];
  var fromRight = array.length - count;
  for (var i = 0; i < fromRight; i++) {
    newArray.push(array[i]);
  }
  return newArray;
}
