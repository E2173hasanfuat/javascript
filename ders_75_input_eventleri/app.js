const todoh = document.querySelector("#todoName");
//  todoh.addEventListener("focus", run);
// todoh.addEventListener("blur", run);
todoh.addEventListener("copy", run);
todoh.addEventListener("paste", run);
todoh.addEventListener("cut", run);
todoh.addEventListener("select", run)
function run(e) {
    console.log(e.type);
    
}