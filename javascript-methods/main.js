var num1 = 7;
var num2 = 9;
var num3 = 5;
var maximumValue = Math.max(num1, num2, num3);

console.log('maximumValue:', maximumValue);

var heroes = ['Batman', 'Spider-man', 'Green Arrow', 'Static Shock'];

var randomNumber = Math.random();
randomNumber = randomNumber * heroes.length;
var randomIndex = Math.floor(randomNumber);
var randomHero = heroes[randomIndex];

console.log('randomIndex:', randomIndex);
console.log('randomHero:', randomHero);

var library = [{
  title: 'Lord of the Flies',
  author: 'William Golding'
},
{
  title: 'The Lord of the Rings',
  author: 'J.R.R. Tolkien'
},
{
  title: 'Light of the Jedi ',
  author: 'Charles Soule'
}
];

var lastBook = library.pop();

console.log('lastBook:', lastBook);

var firstBook = library.shift();

console.log('firstBook:', firstBook);

var js = {
  title: 'JavaScript for Impatient Programmers',
  author: 'Dr. Axel Rauschmayer'
};
var css = {
  title: 'CSS Secrets',
  author: 'Lea Verou'
}
;

library.push(js);
library.unshift(css);
library.splice(1, 1);

console.log('library:', library);

var fullName = 'Andy Duenas';
var firstAndLastName = fullName.split(' ');

console.log('firstAndLastName:', firstAndLastName);

var firstName = firstAndLastName[0];
var sayMyName = firstName.toUpperCase();

console.log('sayMyName:', sayMyName);
