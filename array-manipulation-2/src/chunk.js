/* exported chunk */
function chunk(array, size) {
  if (size >= array.length) {
    return array;
  }
  var count = 0;
  var newArray = [];
  for (var i = 0; i < array.length; i++) {
    var arrayToPush = [];

    if (size > array.length - i) {
      var left = array.length - i;
      for (var a = 0; a < left; a++) {
        arrayToPush.push(array[count]);
        count++;
      }
    } else {
      for (var j = 0; j < size; j++) {
        arrayToPush.push(array[count]);
        count++;
      }
    }
    i = count - 1;
    newArray.push(arrayToPush);
  }
  return newArray;
}
