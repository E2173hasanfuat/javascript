const todo =document.querySelector(".list-group-item");
const todoList = document.querySelector(".list-group");
const card = document.querySelector(".card");
const todoLastChild =document.querySelector(".list-group-item:nth-child(4)");
const mow = document.querySelector(".row");

let value;

value=todoList;
value = todoList.children[0];
value=todoList.children[todoList.children.length-1];
value = todoList.children[3].textContent= "degiditr";
value = Array.from(todoList.children);
value.forEach(function(todo)  {
    console.log(todo.textContent);
});



//cocuktan anneye eris

value = todo;
// value =todo.parentElement.parentElement.parentElement;
ul= todo.parentElement;
let cardBody = ul.parentElement;
let cardElement= cardBody.parentElement;
row = cardElement.parentElement;
let container = row.parentElement;
// value=value.parentElement;


value =todo;
value = todo.nextElementSibling.nextElementSibling.nextElementSibling.nextElementSibling;

value = todoLastChild;
value= todoLastChild.previousElementSibling.previousElementSibling.previousElementSibling.nextElementSibling.previousElementSibling.previousElementSibling;

value =mow.children[0].children[3].children[0].textContent="has changed";
console.log(value);

console.log(todoLastChild);