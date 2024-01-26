
let urun1 = {
    isim: "acer Swift",
    kategori: "teknoloji",
    fiyat: 6.219
};

let urun2 = {
    isim: "acer normal",
    kategori: "teknolojiDegil",
    fiyat: 7.219
};
let urun3 = {
    isim: "acer kas",
    kategori: "high",
    fiyat: 9.219
};
let urun4 = {
    isim: "acer but",
    kategori: "low",
    fiyat: 4.219
};
let urun5 = {
    isim: "acer lu",
    kategori: "man",
    fiyat: 10.219
};
let urun6 = {
    isim: "acer",
    kategori: "aomen",
    fiyat: 15.219
}

let urunler = [urun1, urun2, urun3, urun4, urun5, urun6];
let kullanici = prompt("isim");
let filtreliIsim = [];

getFilterProduct(urunler);
filterProPrint(filtreliIsim);



function getFilterProduct(urunler) {

    urunler.forEach(function (urun) {
        //0 derfsen hepsine bakar
        if (urun.isim.toUpperCase().includes(kullanici.toUpperCase(), 0)) {
            filtreliIsim.push(urun);

        }

    })

}

function filterProPrint(urunler) {
    urunler.forEach(function (urun) {
        console.log("----------");
        console.log("|" + urun.isim +"|" + urun.fiyat + "|"  + urun.kategori);
        console.log("----------");

    });
}

