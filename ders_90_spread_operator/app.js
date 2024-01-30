
// Eğer … fonksiyonun sonunda
//  yer alıyorsa bu Rest parametresidir ve geriye kalanlar
//   bir diziye alınırlar.


//  Eğer … fonksiyon çağrımında 
//  veya benzeri bir olayda kullanılıyorsa buna Spread 
// Operatörü denir ve diziyi listeye çevirir.

let numbers=[10,20,30,40]
function add(a,b,c,d) {
    console.log(a+b+c+d);
    
}
//eski yontem

// add(numbers[0],numbers[1],numbers[2],numbers[3])
add(...numbers);


const diller1 = ["java","ecma"]
// const diller2 = ["php","phyton", diller1[0],diller1[1]]
const diller2 = ["php","phyton", ...diller1]
console.log(diller2);



const vnumbers = [1,2,3,4,5,6,7,8,9]
let [a,b, ...kalanSayilar] =vnumbers
console.log(a,b, kalanSayilar);


const arry1=["enes","ali","veli", "mehmet"]
// let arry2=[]
// arry2[0]=arry1[0]
// arry2[1]=arry1[1]
// arry2[2]=arry1[2]
// arry2[3]=arry1[3]



const arry2 = [...arry1]
console.log(arry2);