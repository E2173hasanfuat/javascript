//"dinamik element olusturma

const cardBody = document.querySelectorAll(".card-body")[1];
const todoList = document.querySelector(".list-group")

console.log(cardBody);

const link =document.createElement("a");
link.id ="web";
link.className="btn btn-dark btn-sm mt-3";
link.href="http://enesbayram.net";
link.innerHTML = "Kisisel Websitemw Git";

cardBody.appendChild(link);

const todo = document.createElement("li");
const todoLink = document.createElement("a");
const i = document.createElement("i");

todo.className ="list-group-item d-flex justify-content-between";
todo.innerHTML="todo5";

todoLink.href ="#";
todoLink.className="delete-item";

i.className="fa fa remove";

todoLink.appendChild(i);
todo.appendChild(todoLink);

todoList.appendChild(todo);

console.log(link);
