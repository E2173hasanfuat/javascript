// 12 saniye suren ve 4 saniye suren is var. asekron demek ilk is bittikten sonra digerine gec
//? asekronda birbirini beklemeden aynanda devam ediloar toplamda 12 saniye bitio hepsi
//!aynanda baslayanlar asenkrondur. en uzun isin suresi kadar hepsi biter
//todo dezavantaji: 
//js senkron bir dildir.

//!ASENKRON CALISMASINA SEBEP OLANLAR/
//! callback-promise-async&await
//?asenkron yapilari sonkrona cevirip kullaniyoruz

//todo asenkron :1-timing  isteklerinde
// setTimeout(() => {
    
// }, timeout);
//todo asenkron :2-event
//clcik
//todo asenkron :3-http isteklerinde  //COK ONEMLI
//WEB/API tarafindaki her sey asenkron kullanilir



// console.log("1");
// console.log("2");
// console.log("enes");

// function selamla() {
//     console.log("sl")
// }
// selamla()

//!   1-TIMING
console.log("enes");
setTimeout(() => {
    console.log("sure doldu ve calisti");
}, 1000);
setTimeout(() => {
    console.log("now");
}, 500);

console.log("bayram");//bayram asenkronun bitmesini beklemeden hemen baslar
//normlade en asagida oldugu icin en son saniyeli olan asenkronlar bittikten sonra baslamasi lazimdi
//ama asenkronlar gecis izni verirler sonrakine