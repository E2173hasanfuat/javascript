// console.log(window);
// sessionStorage.setItem("350","enes");
// sessionStorage.setItem("216","yasin");
// sessionStorage.setItem("15","as");
// sessionStorage.removeItem("15");
// let value = sessionStorage.getItem("216§");
// if(value ===null){
//     console.log("deger bullunnamadi");
// } else {
//     console.log("bulundu");
// }
// console.log(value);

// sessionStorage.clear();
// let value = sessionStorage.getItem(350);
// console.log(typeof value);


// let names = ["ali", "mehemt","kubra"];

// sessionStorage.setItem("names", JSON.stringify(names));//arraymis gibi setle
// let value = JSON.parse(sessionStorage.getItem("names"));//array olarak aldik
// console.log(typeof value);


// value.forEach(function(name) {
//     console.log(name);
    
// });


//?local storage

// localStorage.setItem("motion1","enes");
// localStorage.setItem("motion2","barfix");
// localStorage.setItem("motion4", "sinav");

// let value = localStorage.getItem("motion1"); //todo key istio
// console.log(value);


// localStorage.removeItem("motion4");
// localStorage.clear();


let motions=["Push up", "barfix", "burpee", "squad"];


localStorage.setItem("motions", JSON.stringify(motions));

let value=JSON.parse(localStorage.getItem("motions"))

value.forEach(function(motion) {
    console.log(motion);

});
console.log(typeof value); 









