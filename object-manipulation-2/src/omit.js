/* exported omit */
function omit(source, keys) {
  var obj = {};
  var secondObj = {};
  for (var key in source) {
    for (var i = 0; i < keys.length; i++) {
      if (key === keys[i]) {
        obj[key] = source[key];
      }
    }
  }
  for (var secondKey in source) {
    if (obj[secondKey] === undefined) {
      secondObj[secondKey] = source[secondKey];
    }
  }
  return secondObj;
}
