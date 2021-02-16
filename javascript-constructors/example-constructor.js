function ExampleConstructor() {

}

console.log(ExampleConstructor.prototype);
console.log(typeof (ExampleConstructor.prototype));

var newExampleConstructor = new ExampleConstructor();

console.log(newExampleConstructor);
var instanceOfExampleConstrucor = newExampleConstructor instanceof ExampleConstructor;

console.log(instanceOfExampleConstrucor);
