/* exported takeRight */
function takeRight(array, count) {
  if (count >= array.length) {
    return array;
  }
  var newArray = [];
  var fromRight = array.length - count;
  for (var i = fromRight; i < array.length; i++) {
    newArray.push(array[i]);
  }
  return newArray;
}
