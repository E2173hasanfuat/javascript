const todo = document.querySelectorAll(".list-group-item")[0];
const todoList = document. querySelector(".list-group");
const clearButton = document.querySelector("#todoClearButton");

console.log(clearButton);

todo.style.color = "red";
todo.style.background = "purple";
todo.style.fontWeight = "1000";
todo.style.paddingTop = "50px";
todo.style.paddingLeft = "50px";

todoList.style.marginTop = "60px"

clearButton.style.backgroundColor= "red";
clearButton.style.fontWeight= "bold";
clearButton.style.paddingTop = "20px";
clearButton.style.borderRadius = "50px";


