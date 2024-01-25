let dizel = 24.53, benzin=22.25, lpg=11.1;
const yeniSatir = "\r\n";

const yakitMetni = "1-Dizel"+yeniSatir 
+"2-Benzin" +yeniSatir
+"3-LPG"+ yeniSatir
+"tur seciniz";


let yakitTipi =prompt(yakitMetni);

if (yakitTipi=="1"|| yakitTipi=="2"|| yakitTipi=="3") {
    let yakitLitresi =Number(prompt("litre"));
let bakiye =Number(prompt("Bakiye gir"));
    if (yakitTipi==1) {
        //dizel
        let odenecekTutar =dizel*yakitLitresi;
        if (odenecekTutar<bakiye) {
    //bakiye yeterli
            bakiye = bakiye-odenecekTutar;
            alert("Yakit alma islemi basarili:"+yeniSatir
            +"Kalan Bakiye:"+ bakiye)
        } else {
            //bakiye yeterli degil
            alert("bakiyeniz yeterli degil:"+yeniSatir
            +"odenecek tutar: "+ odenecekTutar+yeniSatir
            +"bakiye: "+bakiye+yeniSatir
            +"eksiktutar : "+(odenecekTutar-bakiye))
            
        }
        
    } else  if(yakitTipi=="2"){
        //benzin
        let odenecekTutar =benzin*yakitLitresi;
        if (odenecekTutar<bakiye) {
    //bakiye yeterli
            bakiye = bakiye-odenecekTutar;
            alert("Yakit alma islemi basarili:"+yeniSatir
            +"Kalan Bakiye:"+ bakiye)
        } else {
            //bakiye yeterli degil
            alert("bakiyeniz yeterli degil:"+yeniSatir
            +"odenecek tutar: "+ odenecekTutar+yeniSatir
            +"bakiye: "+bakiye+yeniSatir
            +"eksiktutar : "+(odenecekTutar-bakiye))
            
        }
    
        
    }else  if(yakitTipi=="3"){
        //lpg
        let odenecekTutar =lpg*yakitLitresi;
        if (odenecekTutar<bakiye) {
    //bakiye yeterli
            bakiye = bakiye-odenecekTutar;
            alert("Yakit alma islemi basarili:"+yeniSatir
            +"Kalan Bakiye:"+ bakiye)
        } else {
            //bakiye yeterli degil
            alert("bakiyeniz yeterli degil:"+yeniSatir
            +"odenecek tutar: "+ odenecekTutar+yeniSatir
            +"bakiye: "+bakiye+yeniSatir
            +"eksiktutar : "+(odenecekTutar-bakiye))
            
        }
    } 
}


else {
    alert("lutfen gecerli bir yakit turu seciniz!!!")
} 