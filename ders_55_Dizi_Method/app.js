let arabalar =["toyota","bmw", "mercedes", "opel"]

arabalar.push("porsche")
console.log(arabalar);
let diziuzunluk =arabalar.length
console.log(diziuzunluk);



arabalar.unshift("hundayi");
console.log(arabalar);

silinenEleman=arabalar.pop();
console.log(arabalar);
console.log(silinenEleman);

let silinen = arabalar.shift()
console.log(arabalar);
console.log(silinen);

console.log(arabalar);
arabalar.splice(2,0,"hundai");
console.log(arabalar);

arabalar.splice(1,2)
console.log(arabalar);


arabalar.splice(2,2,"hundai");
console.log(arabalar);


console.log(typeof arabalar);
let stringQArabalar = arabalar.toString();
console.log(typeof stringQArabalar);
console.log( stringQArabalar);
console.log(arabalar);

let stringarabalar =arabalar.join("?")
console.log(stringarabalar);

let arabalar2 =["tofas","jazz"];
let bnirlesmisDizi=arabalar.concat(arabalar2);
console.log(bnirlesmisDizi);

console.log(arabalar);
let ayrik=arabalar.slice(2);
console.log(ayrik);

console.log(arabalar.length);
let ters =arabalar.reverse();
console.log(arabalar);
console.log(ters);
let isimler = "ali,mehmt,ogun";
let isimDizi= isimler.split(",");
console.log(isimDizi);

let indexin=arabalar.indexOf("toyota");
console.log(indexin);

let include = arabalar.includes("toyota");
console.log(include);

