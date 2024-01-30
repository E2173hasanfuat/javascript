let names =["Enes","ali", "yusuf","betul","ceyda"]
// names.forEach(function (name) {
//     console.log(name);
     
// });

//todo names.forEach(name=>console.log(name));

//for  in ;dongu whole gibi
//for in dizi uzerinde donerken her bir dizenin index numarasini verir!!!!!!

//! for in ====index   // indexden degere
// for(let name in names){
//     console.log(name, names[name]);
// }


//?for of   DIREKT DEGERI VERIR BIZE  //degerden indexe
for (let isim of names){
    console.log(isim, names.indexOf(isim))
}
