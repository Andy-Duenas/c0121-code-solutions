var $userList = document.querySelector("#user-list");

function getUsers(){
var xhr = new XMLHttpRequest();
xhr.open('GET', 'https://jsonplaceholder.typicode.com/users');
xhr.responseType = 'json';
xhr.addEventListener('load', function () {
  console.log(xhr.status);
  console.log(xhr.response);
  for(var i = 0; i < xhr.response.length;i++){
    makeTree(xhr.response[i]);
  }
});
xhr.send();
};

getUsers();

function makeTree(list){
  var ulName = document.createElement("li");
  ulName.textContent = list.name;
  $userList.append(ulName);
}
