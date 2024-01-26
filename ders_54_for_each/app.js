let dizi1=[];
let dizi2=new Array("enes","ali");

dizi1[0] ="enes";
console.log(typeof dizi2);


//todo foreach : dizilerde kullanilir

//diziler hep 0 dan baslar
//herzaman length den kucuk sayi kadar donderilir
 let names =["enes","ali","ata","naj"];
// for (let i = 0; i< names.length; i++) {
//   console.log(names[i]);
//     }


// names.forEach(function(isim)  {
//     console.log(isim);
// }); 


let sayac=0;
while (sayac<names.length) {
    console.log(names[sayac]);
    sayac++;
}