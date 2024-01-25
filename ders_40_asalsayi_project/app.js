let sayi = Number(prompt("sayi nedir"));
let sonuc = true;

for (let i = 2; i < Math.floor(sayi / 2); i++) {
   
    if (sayi % i == 0) {
        //?asal degil

        sonuc =false;
        break;
    } 
}
if (sonuc) {
    alert(sayi+"asaldir")
} else {
    alert(sayi+"asal degildir")
    
}