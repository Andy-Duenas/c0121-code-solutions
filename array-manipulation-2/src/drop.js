/* exported drop */
function drop(array, count) {
  var newArray = [];
  if (count >= array.length) {
    return array;
  }
  for (var i = count; i < array.length; i++) {
    newArray.push(array[i]);
  }
  return newArray;
}
