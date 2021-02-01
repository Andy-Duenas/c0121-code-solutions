/* exported toObject */
function toObject(keyValuePair) {
  var objArray = {};
  objArray[keyValuePair[0]] = keyValuePair[1];
  return objArray;
}
