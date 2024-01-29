const todoList = document.querySelector(".list-group");
const todos = document.querySelectorAll(".list-group-item");

const cardBody = document.querySelectorAll(".card-body")[1];


const newTitle = document.createElement("h2");
newTitle.className = "card-title";
newTitle.textContent = "Todo Listesiiii";

cardBody.replaceChild(newTitle, cardBody.childNodes[1])


todos[0].remove();
todos[1].remove();
console.log(todos);

todoList.removeChild();


