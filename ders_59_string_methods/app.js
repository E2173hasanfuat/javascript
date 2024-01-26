let kurs = "Modern Werb Gelistirme Kursu"
let karakter =kurs.charAt(1)
console.log(karakter);

let tarih ="2002";
let sonuc = kurs.concat(" ",tarih);
console.log(sonuc);
//todo indexOf ile concat birbirlerinin zitti

let index=kurs.indexOf("o");
console.log(index);


let a= kurs.toUpperCase();
console.log(a);


let tr = kurs.trim();
console.log(tr);

console.log(kurs);
console.log(kurs.slice(7,10));

console.log(kurs.substring(0,6));

console.log(kurs.replace("Modern","ka"));
console.log(kurs);
let dizi =kurs.split(", ");
// let dizi =kurs.split(" ");
console.log(dizi);

console.log(kurs.valueOf);
console.log(kurs.startsWith("M"));
console.log(kurs.endsWith("Kursu"));