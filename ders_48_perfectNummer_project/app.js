//bir sayi tam bolunmesi icin yarisina kadar bolujnmesi yeterlidir
ispNu(6)



function ispNu (number){
let toplam = 0;
for(i=2; i<=number/2; i++)
if(number%i==0) {
    toplam+=i;
}

toplam+=1+number;

if(toplam==number*2){
console.log("perfect");
}else{
    console.log("nein");
}

}