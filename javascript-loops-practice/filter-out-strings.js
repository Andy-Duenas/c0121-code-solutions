/* exported filterOutStrings */

function filterOutStrings(values) {
  var newValue = [];
  for (var i = 0; i < values.length; i++) {
    if (typeof (values[i]) !== 'string') {
      newValue.push(values[i]);
    }
  }
  return newValue;
}
