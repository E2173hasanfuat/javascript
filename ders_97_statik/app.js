//statik; duragan degismeyen
// bazi degisken ve methodlari statik olarak tanimladigimizdan
// klasdan nesne turetmeden direkt sinif ismi uzeinden method ve ozellliklerie ulasmaktayiz


class Matematik{
//bir sinifin icindeki ozelillere ve methodlara ulasmak icin nesne turtetmek gerek
   static topla(a,b){
        console.log(a+b);
    }
    cikar(a,b){
        console.log(a-b);
    }
    carp(a,b){
        console.log(a*b);
    }
    bol(a,b){
        console.log(a/b);
    }
  
}
// const matematik= new Matematik();
 //arkada derleyici bos bir constraktir atar

// matematik.topla(10,5);

//sinif uzerinden ulascaz
Matematik.topla(10,7)
