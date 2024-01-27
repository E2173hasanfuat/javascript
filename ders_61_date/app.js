"use strict"
//!date

console.log(window);

let tarih =new Date();

let tarih1 =new Date(1999,8,7,10,15,50)
console.log( tarih1);
console.log(typeof tarih1);
// console.log(tarih.getMonth()+1);

//todo COK ONEMLI
console.log(tarih.toLocaleDateString());
console.log(tarih.toLocaleTimeString ());
console.log(tarih.toLocaleString() );


console.log(tarih);
tarih.setHours(15);
console.log(tarih);
tarih.setDate(24);
console.log(tarih);
tarih.setMonth(11);
console.log(tarih);
tarih.setMinutes(50);
console.log(tarih);
tarih.setHours(tarih.getHours()+2);
console.log(tarih);
console.log(tarih.toString());
console.log(typeof tarih.toString());


