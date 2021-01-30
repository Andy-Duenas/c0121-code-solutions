/* exported tail */
function tail(array) {
  var newArray = [];
  for (var i = 0; i < array.length; i++) {
    if (i >= 1) {
      newArray.push(array[i]);
    }
  }
  return newArray;
}
