/* exported getKeys */
function getKeys(object) {
  var objKeysArray = [];

  for (var key in object) {
    objKeysArray.push(key);
  }
  return objKeysArray;
}
