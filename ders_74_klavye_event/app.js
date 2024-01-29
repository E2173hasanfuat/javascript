//todo keypress - keydown - keyup
// document.addEventListener("keypress", run);
//!harf ve sayilarda tetiklenir sadece??? keypress
// document.addEventListener("keydown", run); // up da hepsinde
//? !alles sadece??? keydown

// document.addEventListener("keyup", run);
// function run(e){
//     // console.log(e.key);
//     // console.log(e.keyCode);
//     // console.log(e.which);
//     console.log(e.key);
// }

//
// document.addEventListener("keydown", run);
// function run(e){
//     // console.log(e.key);
//     // console.log(e.keyCode);
//     // console.log(e.which);
//     console.log(e.key);
//     e.preventDefault();
// }


const cardTitle = document.querySelectorAll(".card-title")[0];
const input = document.querySelector("#todoName");



input.addEventListener("keyup",run);

function run(e) {
      cardTitle.textContent =e.target.value;
    
}

