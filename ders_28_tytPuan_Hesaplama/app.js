"use strict"

let turkceDogru, turkceYanlis = 0;
let matematikDogru, matematikYanlis = 0;
let sosyalDogru, sosyalYanlis = 0;
let fenDogru, fenYanlis = 0;
let puan = 0;
let okulPuani = 0;



let yeniSatir = "\r\n";
let mesaj = "hosgeldiniz" + yeniSatir
    + "1-Puan hesapla" + yeniSatir
    + "2-cikis yap";


let secim = prompt(mesaj);



switch (secim) {
    case "1":
        okulPuani = Number(prompt("Okul puaninizi giiriniz: "))
        turkceDogru = Number(prompt("turkce dogru sayisini"));
        turkceYanlis = Number(prompt("turkce yanlis sayisini"));

        matematikDogru = Number(prompt("mat dogru sayisini"));
        matematikYanlis = Number(prompt("mat yanlis sayisini"));

        sosyalDogru = Number(prompt("s dogru sayisini"));
        sosyalYanlis = Number(prompt("s yanlis sayisini"));

        fenDogru = Number(prompt("f dogru sayisini"));
        fenYanlis = Number(prompt("f yanlis sayisini"));

        //30
        let dogruSayisi = turkceDogru + matematikDogru + sosyalDogru + fenDogru;
        let yanlisSayisi = turkceYanlis + matematikYanlis + sosyalYanlis + fenYanlis;
        let kalanDogruSayisi = dogruSayisi - (Math.floor(yanlisSayisi / 4));
        puan = (kalanDogruSayisi * 4) + 100 + okulPuani;
        alert("TYT Puaniniz : " + puan)
        break;
    case "2":
        alert("uygulamadan cikis yapildi");

        break;

    default:
    alert("lutfen gecerli bir deger giriniz")
        break;
}
