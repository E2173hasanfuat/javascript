//gercek hayati bilgisayara anlatmaktir
//oop olmadan nasil kod yaziliomus anlamasi zor

class Insan{  //sinif
    constructor(isim,soyisim,yas,maas){//yapici method
        // debugger
        //constractir neye yarara:
        //1-ozellik 2-yapici method 3- function
        this.isim =isim;
        this.soyisim=soyisim;
        this.yas=yas;
        this.maas=maas;
        //sol tqarafddaki degiskenler ozelliktir ve degerlerini sag taraflardaki parametreler olarak gelir
        //konstraktir kullanarak yapici metotla degislenler yaptim
        //sira funksiyonda
        console.log("Yapici method calisti");

    }
    bilgileriGoster(){
        // debugger
        console.log(`isim : ${this.isim}
      Soyisim : ${this.soyisim}
        yas: ${this.yas}
        maas : ${this.maas}
        `);
    }
}
//nesne olusturmak
const insan1 =new Insan("enes","bayram",23,10000); //todo bunu insan1 uzerinde tut 
//new Insan yaptiginizda bunu olusturmak icin new kullanililir
//ben insan sinifinin constractiriyim. uzerine ctrl ile tikla bak nereyi gosterio
//ilk consttraktira gidip isini bitirip sonra geri gelip sag tarafi sola atio
const insan2 = new Insan("Betul","cinar",24,7500);
insan1.bilgileriGoster()
insan2.bilgileriGoster()


//RAM belleke 2 kutu ciz :insan1 ve insan2


//bir sinufun icindeki ozellik ve methodlarikullanmaniz  icin o siniftan new anahtar 
//kelimesini kullanarak nesne olusturmak zorundayiz
//nesne olusturunca verdigimiz degerleri constraktir kullanir!!

console.log(insan1.isim);
console.log(insan2.isim);

//bir sinif vardir bir yapici method bu sinifin ozellikleri vardir.