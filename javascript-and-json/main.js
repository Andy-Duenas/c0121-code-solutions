var bookArray = [{
  isbn: '123',
  title: 'First Book',
  author: 'George Lucas'
},
{
  isbn: '456',
  title: 'Second Book',
  author: 'Han Solo'
},
{
  isbn: '789',
  title: 'Third Book',
  author: 'Luke Skywalker'
}];
console.log('bookArray:', bookArray);
console.log('typeof(bookArray):', typeof (bookArray));

var jsonBook = JSON.stringify(bookArray);
console.log('jsonBook:', jsonBook);
console.log('typeOf(jsonBook)', typeof (jsonBook));

var jsonString = '{"name":"Andy", "id":12345}';
console.log('jsonString:', jsonString);
console.log('typeOf(jsonString)', typeof (jsonString));

var parsedObj = JSON.parse(jsonString);
console.log('parsedObj:', parsedObj);
console.log('typeOf(parsedObj)', typeof (parsedObj));
