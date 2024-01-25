"use strict"


// let isim = "enes";
let isim = 15.7; //todo tum rakamlar(ondalikli fln hepsi) number verir
console.log(isim);
console.log(typeof isim);


let a ="5";
console.log(typeof a);

let b ="2"
console.log(a+b);

let yas="yasiniz:";
let age =23
console.log(yas+age);

//boolen tr flse


console.log(
5<2,
5>2
);

let c=2;
let v=12

let sonuc=c+v;
console.log(sonuc!=54);


// todo null


let z = null;
z =26
console.log(z);

let u;
console.log(typeof u);//! value=undefiend tanimlanmis ama deger atanmamais
//primitiv(magaradan cikaln ilkel) ve referans(takim elbise giyis modern) tipleri
//ama ikisinnde kullanim alanri farkli
//object
let insan = {
    isim:"enis",
    soyad:"bayram",
    yas:87
}

console.log(typeof insan);

let rakam=[1,2]; //referans tip object
console.log(typeof rakam);

let func = function () { // ? sagdakini al soldakinin icine koy
    //!fonksiyonu degiskene atadim"""!!
    console.log("merhaba");
}

func();
console.log(typeof func);
