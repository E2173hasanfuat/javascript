
"use strict"
//event dinleyicisi

 const clearButton = document.querySelector("#todoClearButton");
// clearButton,addEventListener("click", function () {
//     this.alert("asdaf")
    
// })

clearButton.addEventListener("click", changeTitle);

function changeTitle(e){
    // document.querySelectorAll('.card-title')[1].textContent='todobasligini degistir';
console.log(e.type); //event
console.log(e.target); //html verir
}
