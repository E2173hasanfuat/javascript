"use strict"

//map ler arry gibi bir dizi turudur



// donguler
// do while
// while
// for
// for each
// for in
// for of


const map1=new Map();
//birtane map olustrurmak icin kullanmam gereken bir anahtar kelime : new
//set
// map1.set(1,"enes")
// map1.set(true,5)
// map1.set([1,2,3],{firstname:"hasan", lastName:"akdag"})
let value;

map1.set(34,"istanbul")
map1.set(35,"izmir")
map1.set(6,"ankara")
map1.set(1,"adana")

//get
console.log(map1.get(6));

const donenDeger = map1.get(35)
console.log(donenDeger);

//size

value=map1.size;

value=map1.delete(34) //true
console.log(value);
console.log(map1.size);


//deger varmi?  HAS***********

console.log(map1.has(35));

//bir map uzerine nasil donebilirz

// for(let [key,value] of map1){ //destructing
//     console.log(key,value);
// }


for(let [key,value] of map1){ //destructing
    console.log(key,value); ///dizi dondu
}


// let array =[34, "istanbul"];
// let [a,b] =array;

// console.log(a,b);

//todo get : ver key i al value yu!!!!!!!!!!!!!


const keys= Array.from(map1.keys());
console.log(keys);


keys.forEach((key) => {
console.log(key, map1.get(key));    
});

///!sadece degerler al bakalim key leri degil


//keyy
for (let key of map1.keys()) {
    console.log(key);
}
//value
for (let value of map1.values()) {
    console.log(value);
}

//TODO MAPTEN ARRAY E CEVIRMEK

const array = Array.from(map1);
console.log(array);
const array2 = [
    [34,"istanbuj"],
    [6,"ankara"],
    [35,"izmir"],
    [1,"adana"]
]


array2.forEach((value)=>{
    console.log(value[0]);
    console.log(value[1]);
})




// arrayden map yapmak
const array4 = [
    [34,"istanbuj"],
    [6,"ankara"],
    [35,"izmir"],
    [1,"adana"]
]

const myMAP=new Map(array4);
console.log(myMAP);

const myArray = Array.from(myMAP)
console.log(myArray);


// referans ve ilkel tipler aynanda set edilemez
// let key =[1,2,3]
let key ={ad:"ghasa"}

map1.set([1,2,3], "Array")
map1.set(key, "Array")
map1.set({ad:"ghasa"}, "object")
console.log(map1.get([1,2,3])); //todo undefined
console.log(map1.get(key)); //?BINGO
console.log(map1.get({ad:"ghasa"}))  //undefined

//!mapler array gibidir ama farki key ve value tutarlar. icindeki belirli metodlari kullaniriz. keyden bir map in degerine ulasurken keyin referanas tipli olmasi durumunda cekemezsiniz. 