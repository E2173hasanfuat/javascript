window.addEventListener("load", run);
// document.addEventListener("DOMloadContent", run);

const cardTitle=document.querySelectorAll(".card-title")[1];
const cardBody = document.querySelectorAll(".card-body")[1]

cardBody.addEventListener("mouseleave",run)
// cardBody.addEventListener("mouseout",run)
function run(e){
    console.log(e.type);
};


//todo DOMContentLoaded
//load
click 
dblclick
mouseover
mouseout
mouseenter
mouseleave