let sayi = prompt("sayi ver");
let toplam=0;


for(let i=0; i<sayi.length; i++){
    let rakam = sayi.charAt(i);
    toplam+=rakam*rakam*rakam;
}


if(Number(sayi)==toplam){
    alert("Armstrong sayisidir:");
}else {
    alert("armstrong sayi degildir")
}