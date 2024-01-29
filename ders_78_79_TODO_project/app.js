"use strict";

const form = document.querySelector("#todoAddForm"); // Corrected the id
const addInput = document.querySelector("#todoName");
const todoList = document.querySelector(".list-group");
const firstCardBody = document.querySelectorAll(".list-group")[0];
const secondCardBody = document.querySelectorAll(".list-group")[1];
const clearButton = document.querySelector("#todoClearButton"); // Corrected the id

runEvents();
function runEvents() {
    form.addEventListener("submit", addTodo);
}

function addTodo(e) {
    console.log("submit calisti");
    e.preventDefault();
}
