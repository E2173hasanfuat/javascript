//set ler de dizi cesidi. setlerde mapler gibi dizilerin altermnnatigi
// setlerin icine koyulan degerler saedce 1 kere kulalnilabiliyor. maplerle geri her sey ayni

const set = new Set();

//set methodu

set.add(true)
set.add(3.14)
set.add("enes")
set.add("enes")
set.add("enes")
set.add("enes")
set.add("enes")
set.add(7)
set.add({usernam:"hasan", pass:"4"})
set.add([1,2,3,4])
console.log(set.size);  //enes i kac kere ekledim ama sadce 1 kere kullanma izin ver di iste set de isin puf nopktasi budur
//delete
set.delete("enes")
set.delete(7)
set.delete([1,2,3,4])  //referans tippini silemezsin balktiklari yer ayni degildir. bir degisken uzerinden taniulmlayip ayni yere baktirfdiginizda olay tamamdir

console.log(set.size);
console.log(set.has("ali"));
//yine objeleride veremezsiniz

//todo for of dongusu ile gezinme

for (let value of set) { //in ile index vermiyor
    console.log(value);
    
}

//  const values =Array.from(set); //seti arraye cevirdik
// console.log(values);

// values.forEach((value)=>{
//     console.log(value);
// })



//set den aray olusturma

const values =Array.from(set); //from zaten dan den demek // olusturdugunde degeride sool taraftaki value ye koy


//arryden set olutur
let array=[1,"enes",true,"Mustafa",15,[1,2,3]]
const newSet =new Set(array);
console.log(newSet);


//setlerin dizilerden hic bir farki yoktur
// birbirlerinin alternatifidir
// kay value mantigi ile caliscagin zaman map iyi gider


// ayni deger 1 den fazla tutulmasin dersen seti yapistir

