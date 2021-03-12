/* eslint-disable no-console */
/* exported titleCase */
function titleCase(title) {
  title = title.toLowerCase().split(' ');
  var results = '';
  for (var i = 0; i < title.length; i++) {
    if (title[i].length <= 3) {
      if (title[i] === 'api') {
        results += 'API' + ' ';
      } else if (title[i] === title[0] || title[i] === 'web') {
        results += title[i][0].toUpperCase() + title[i].slice(1) + ' ';
      } else if (title[i - 1].includes(':')) {
        results += title[i][0].toUpperCase() + title[i].slice(1) + ' ';
      } else {
        results += title[i] + ' ';
      }
    } else {
      if (title[i].includes('javascript')) {
        if (title[i].includes(':')) {
          results += 'JavaScript:' + ' ';
        } else {
          results += 'JavaScript' + ' ';
        }
      } else if (title[i].includes('-')) {
        var replace = title[i][title[i].indexOf('-') + 1];
        var capital = title[i][title[i].indexOf('-') + 1].toUpperCase();
        var word = title[i];

        word = word.replace(replace, capital);
        word = word[0].toUpperCase() + word.slice(1) + ' ';
        results += word;
      } else {
        results += title[i][0].toUpperCase() + title[i].slice(1) + ' ';
      }
    }
  }
  return results.trim();
}
