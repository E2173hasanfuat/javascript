//global - function -block scopes
var degisken = 10;
console.log(degisken); //? kap icinde 10 var


var b= 5;  //5 i b degeri icine koyuyoruz.
// global scope her yerden ulasabilirsin.
let c=15;

if(true){
    var d= 54;
    let e= 74;
}
function method1() {
    console.log(b);
     console.log(d);
     // ! console.log(e);
    
}
method1();



// funtion icinde tanimlanan sadece function icinde kullanilabnlir
var l= 54;
function method2() {
    var sayi =10;
    console.log(l);
}
// console.log(sayi);
method2()


//block scope


// function mehthod3() {

//     var h=5;  // funcrion scope
//     console.log(h);
//     if (true) {
//         var g= 7; // todo block scope
        
      
//     }
   
//     while (true) {
        
//     }
//     for (let i = 0; i < i.length; i++) {
       
        
//     }
// }

// mehthod3()


//int degiskeni = deger;
//int yas =23; // 23 u yasin icine koy! 23 u sakla yas degiskeni icersinde;
//todo           var : function scope
//!            let ve const blok scope dur.

 x=34; //global scope

function slmVer() {
    var selam ="herkese selam"; //function scope
if (true) {
    var k =45;
    let c=100;
    console.log(c);
    // console.log(k);
    // console.log(x);
}
// console.log(k);
    // console.log(selam);
  

}

slmVer();



var a = 5;
var a= 10;
console.log(a);

// let m= 50;
// let m =39;
// console.log(m);

// if (true) {
//     let a = 5;
//     let b= 56;
//     console.log(a);
// }
// console.log(a);


//! var rem bellekte cok fazla yer kaplamis oluyorsun

//todo let ve constla aynin degiskeni 1 defa kullanabilliyrsunuz


//? const constant dan gelio  //calismaz
// const r = 10;
// r =15;
// console.log(r);


//let te calisir
let t =5;
t=7;
// let t =10; calismaz
console.log(t);


//calismaz
// const user ={
//     username : "enes",
//     pasaword :"123",
// }

// user={age:23};
// console.log(user);
//?taminladiginizb const icindekileri degistirebiliriniz ama const u farkli bir degiskene tasiyamniyorum
// = icine yeni bir sey atayamazsin zaten atanmis olanlari degistirebilirsin 
//todo ama lette icindeki degiskenleri de degistirebilitrsinz


let dal ={
    username : "enes",
    pasaword :"123",
}

 dal ={age:23};
console.log(dal);