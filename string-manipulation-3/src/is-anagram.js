/* eslint-disable eqeqeq */
/* eslint-disable no-console */
/* exported isAnagram */
function isAnagram(firstString, secondString) {
  firstString = firstString.replace(/\s/g, '');
  secondString = secondString.replace(/\s/g, '');
  var firstArray = [];
  var secondArray = [];
  firstArray.push(firstString.split('').sort());
  secondArray.push(secondString.split('').sort());
  var found = 0;

  for (var i = 0; i < firstArray.length; i++) {
    for (var a = 0; a < secondArray.length; a++) {

      if (firstArray[i] === secondArray[a]) {
        found += 1;
        break;
      }
    }
  }
  if (found === secondArray.length) {
    return true;
  }
  return false;
}
