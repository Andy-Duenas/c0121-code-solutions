/* exported take */

function take(array, count) {
  var newArray = [];
  if (count >= array.length) {
    return array;
  }
  for (var i = 0; i < count; i++) {
    newArray.push(array[i]);
  }
  return newArray;
}
