"use strict";

let kilo = Number(prompt("kilo gir la"));
//number yap,auzsak string sonucta mathe islemleri yapamayiz

let boy = Number(prompt("boygir la"));
let sonuc = kilo/(boy*2);

if (sonuc<18.5) {
    console.log("ideal kilonun altinda"+ sonuc)
    
} else if (sonuc>=18.5 &&sonuc<=24.9){
    console.log("ideal kilo altinda"+sonuc);
}else if (sonuc>=18.5 &&sonuc<=24.9){
    console.log("ideal kilo "+sonuc);
}else if (sonuc>=25 &&sonuc<=29.9){
    console.log("ideal kilo altinda"+sonuc);
}else if (sonuc>=30 &&sonuc<=39.9){
    console.log("obez"+sonuc);
}else if (sonuc>=40){
    console.log("morbid obez"+sonuc);
}