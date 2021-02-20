/* exported numVowels */
function numVowels(string) {
  var vowelCount = 0;
  var str = string.toLowerCase();
  for (var i = 0; i < string.length; i++) {
    if (str[i] === 'a' || str[i] === 'e' || str[i] === 'i' || str[i] === 'o' || str[i] === 'u') {
      vowelCount++;
    }
  }
  return vowelCount;
}
