/* eslint-disable no-console */
/* exported isAnagram */
function isAnagram(firstString, secondString) {
  firstString = firstString.replace(/\s/g, '');
  secondString = secondString.replace(/\s/g, '');
  var found = 0;
  var prevFound = [];
  for (var i = 0; i < firstString.length; i++) {
    for (var k = 0; k < secondString.length; k++) {
      if (firstString[i] === secondString[k]) {
        if (prevFoundHandler(prevFound, k, firstString, secondString)) {
          break;
        } else {
          prevFound.push(k);
          found += 1;
          break;
        }
      }
    }
  }
  if (found === secondString.length) {
    return true;
  } else {
    return false;
  }
}

function prevFoundHandler(prevArray, num, firstString, secondString) {
  for (var a = 0; a < prevArray.length; a++) {
    if (prevArray[a] === num) {
      for (var i = num + 1; i < firstString.length; i++) {
        if (secondString[num] === firstString[i]) {
          console.log(secondString[num], firstString[i]);
          return true;
        }
      }
    }
  }
  return false;
}
