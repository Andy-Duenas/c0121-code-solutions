var student = {
  firstName: 'Andy',
  lastName: 'Duenas',
  age: 25
};

var fullName = student.firstName + ' ' + student.lastName;

console.log('value of fullName: ', fullName);

student.livesInIrvine = false;
student.previousOccupation = 'erosion control specialist';

console.log('value of student.livesInIrvine: ', student.livesInIrvine);
console.log('value of student.previousOccupation: ', student.previousOccupation);
console.log('value of student: ', student);

var vehicle = {
  make: 'ford',
  model: 'focus',
  year: '2017'
};

vehicle['color'] = 'grey';
vehicle['isConvertible'] = false;

console.log('value of vehicle["color"]: ', vehicle['color']);
console.log('value of  vehicle["isConvertible"]: ', vehicle['isConvertible']);
console.log('value of vehicle: ', vehicle);

var pet = {
  name: 'Mimi',
  type: 'Dog'
};

delete pet.name;
delete pet.type;

console.log('value of pet: ', pet);
