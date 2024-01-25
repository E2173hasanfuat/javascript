"use strict";
//todo if zorunlu else sart degil. ama sadece else olmaz!
// let not =50;
// if(not>50){
//     console.log("gectiniz, notun"+ not);
// } else{
//     console.log("kaldin lo"+not);
// }


// let yas = Number(prompt("yas"));
// console.log(typeof yas);
// let para =Number(prompt("buget"));
// if (yas>=18 && para>=3000) {
//     alert('gectiun')
// } else {
//     alert('nein')
// }

//todo PROMPT HER ZAMAN STRING ALIR
// let vize1= Number(prompt("vize1"));
// let vize2= Number(prompt("vize2"));
// let final= Number(prompt("final"));

// let ortalama =( vize1*0.3)+( vize2*0.3)+(final*0.4);
// if(ortalama>=60){
//     alert("gectiniz")
// } else {
//     alert("kaldin ula")
// }


// let secilenYol =prompt("which");
// if (secilenYol==1) {
//     alert("secilenyol"+ secilenYol+"yoldur")
// } else if (secilenYol==2){
//     alert("secilenyol"+ secilenYol+"yoldur")
// }else if (secilenYol==3){
//     alert("secilenyol"+ secilenYol+"yoldur")
// }else{
//     alert("yol sec")
// }

// let isim2="";
// console.log(isim2);

let ad =prompt  ("isminizi");
let tckn=prompt("tck gir ula");
kontrolEt2(ad,tckn);

function kontrolEt(ad , tckn) {
    if (ad!="") {
        if (tckn.length==11) {
            console.log("isim ve tckn ohne problem");
        } else {
            console.log("lutfen 11 karakter girinz");
        }
    }  else {
        console.log("pls nicht leer lassen");
    }
}


function kontrolEt2(ad,tckn) {
    if(ad==""){
        console.log("lutfen isim alanina birse y girin");
        return;
    }
    if (tckn.length!=11) {
        console.log("11 tan olsun");
        return;
    }
    console.log("one problem");
    
}