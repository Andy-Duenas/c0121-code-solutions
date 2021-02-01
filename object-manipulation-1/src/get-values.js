/* exported getValues */
function getValues(object) {
  var objArray = [];

  for (var keys in object) {
    objArray.push(object[keys]);
  }

  return objArray;
}
