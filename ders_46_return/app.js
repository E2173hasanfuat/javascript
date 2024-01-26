"use strict";

// cube(3);
// function cube(sayi) {
//     let sonuc = sayi*sayi*sayi;
//  return sonuc;
//     //!return un dondurdugu yer methodun yani parantezli islemin oldugu yere birakmasidir
//?return kullanim amaci sonucu disarida kullanmaktir
//todo return anahtar kelimesinden sonra yazmis oldugunuz kodlar kesinlikle ulasilmaz
//  BIR METODU BITIREN ANAHTA KELIMEDIR
// }
kube
let karaman = kube(2);
kare(karaman);

function kare(sayi) {
    let sonuc =sayi*sayi;
    console.log(sonuc);

    
}


function kube(sayi) {
    let sonuc =sayi*sayi*sayi;
    return sonuc;
    
}




yazdir();
function yazdir() {
    console.log("enis");
    
}

//todo void: geriye deger dondurmeyen bir methotdur

topla(2);

function daTopla(sayi) {
    let sonuc=sayi+sayi;
    return sonuc;
}


function topla(sayi){
    let sonuc = sayi+sayi;
    let bidaha = daTopla(sonuc)
    console.log(bidaha);

}