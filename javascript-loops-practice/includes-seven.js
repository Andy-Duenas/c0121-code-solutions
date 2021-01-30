/* exported includesSeven */
function includesSeven(array) {
  var checkSeven = false;
  for (var i = 0; i < array.length; i++) {
    if (array[i] === 7) {
      checkSeven = true;
    }
  }
  return checkSeven;
}
