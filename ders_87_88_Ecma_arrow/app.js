//todo tum tarayicilarda standart calismasi icin

//babel 2015 ecmascript 6 sonrasi ozelleikleri kullanitrlken 6 yaceviriyor


// function yazdir() {
//  console.log("merhaba");   
// };

// yazdir()
//! arrow parametresiz

const yazdir=()=>{
    console.log("merhaba");
}

yazdir()

//! parametreli arrow  method=function

//tek islem satiri ise suslu parantezleri kaldi
const yasik = (firstName,lastName)=> console.log("merhaba", firstName,lastName);
//tek islem satiri ise suslu parantezleri kaldi
const kalem = (firstName,lastName)=> 
{console.log("merhaba", firstName,lastName);}


yasik("enes","bayram")
kalem ("ali","ar")

//tek parametre varsa oval parantezide silebilrsiniz
const maka =firstName=> console.log("Merhaba", firstName);


maka("sen")

//todo tek satir vvARSA RETURN  DE SILEBILIRSIN
const kupAl=x=> x*x*x

console.log("deger", kupAl(3));

//eskinin yenisi
Document.addEventListener("click", ()=> {
    
})