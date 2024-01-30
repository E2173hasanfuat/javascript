let mesaj =

`
Migrosa hosgeldiniz.
Money kartiniz varmi?
1-evet
2-Hayir

`;

const urunler = [
    {
        urunIsmi:"Sut",
        fiyat:15,
    },
    {
        urunIsmi:"bez",
        fiyat:100,
    },
    {
        urunIsmi:"kusbasi",
        fiyat:220,
    }
]
//true yada false
let sonuc =confirm(mesaj);
let odenecekTutar;

if(sonuc){
//moneykarti var
let isim = prompt("Adinizi giriniz:");
let soyisim = prompt("soyisminizi giriniz:")

const musteri =new Musteri(isim, soyisim,sonuc, urunler)
odenecekTutar= musteri.hesapla();
alert(`Musteri Bilgileri : ${musteri.isim} ${musteri.soyisim}
        odenecek tutar : ${odenecekTutar}
`)


}else{
        const musteri = new Musteri(null,null,sonuc,urunler);
        odenecekTutar=musteri.hesapla();
        alert(`odenecek tutar: ${odenecekTutar}`)
}