function convertMinutesToSeconds(minutes) {
  var seconds = minutes * 60;
  return seconds;
}

var convertMinutesToSecondsResults = convertMinutesToSeconds(5);

console.log('convertMinutesToSecondsResults:', convertMinutesToSecondsResults);

function greet(name) {
  var nameToGreet = 'Hey, ' + name;
  return nameToGreet;
}

var greetResults = greet('Andy');

console.log('greetResults:', greetResults);

function getArea(width, height) {
  var area = width * height;
  return area;
}

var getAreaResults = getArea(17, 42);

console.log('getAreaResults:', getAreaResults);

function getFirstName(person) {
  var firstName = person.firstName;
  return firstName;
}

var getFirstNameResults = getFirstName({ firstName: 'Lelouche', lastName: 'Lamperouge' });

console.log('getFirstNameResults:', getFirstNameResults);

function getLastElement(array) {
  var lastElementNum = array.length - 1;
  var lastElement = array[lastElementNum];
  return lastElement;
}

var getLastElementResults = getLastElement(['propane', 'and', 'propane', 'accessories']);

console.log('getLastElementResults:', getLastElementResults);
