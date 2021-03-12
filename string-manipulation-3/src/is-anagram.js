/* exported isAnagram */
function isAnagram(firstString, secondString) {
  firstString = firstString.replaceAll(' ', '');
  secondString = secondString.replaceAll(' ', '');
  if (firstString.length !== secondString.length) {
    return false;
  }
  for (var i = 0; i < firstString.length; i++) {
    if (!secondString.includes(firstString[i]) || !firstString.includes(secondString[i])) {
      return false;
    }
  }
  return true;
}
