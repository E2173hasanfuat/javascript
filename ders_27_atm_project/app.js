let yeniSatir = "\r\n"
let bakiye = 1000;

let metin = "1-bakiye goruntuleme" + yeniSatir
    + "2-Para Cekme" + yeniSatir
    + "3-Para Yatirma" + yeniSatir
    + "4-Cikis" + yeniSatir
    + "Lutfen bir deger seciniz"


let secim = prompt(metin);
switch (secim) {
    case "1":
        alert("bakiyeniz: " + bakiye);
        break;

    case "2":
        let cekilecekTutar = Number(prompt("cekmek istediginiz tutari giriniz: "));
        if (cekilecekTutar<bakiye) {
            //succesful
            bakiye -=cekilecekTutar;
            alert("Kalan bakiye: " + bakiye)
        } else {
            alert("Bakiyenizden fazla para cekemezsiniz :"+yeniSatir
            +"Bakiyeniz: "+ bakiye + " " + "Cekilecek Tutar: " + cekilecekTutar)
            
        }
        break;

        case "3": 
        let yatirilacakTutar = Number(prompt("yatirtilcak tutari giriniz:"));
        bakiye +=yatirilacakTutar
        alert("guncel bakiyeniz :" + bakiye)
        break;

        case "4":
            alert("sistemden cikis yapilmistir");
            break;
    default:
        alert("lutfen 1 4 aarasi bi rakam secin");
        break;
}
