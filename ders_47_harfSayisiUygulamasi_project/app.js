let metin = "Suanda Yalovada js egitimim cekiyorum";

// let harf =prompt("harfi giriniz");

// let sonuc = bul(harf);
// alert(sonuc);

bul("a");
bul("c");
bul("b");
bul("s");

function bul(harf) {
    let toplam=0;
    for (let i = 0; i < metin.length; i++) {
        if (metin.charAt(i).toLowerCase()===harf.toLowerCase()) {
           toplam+=1;
        }
        
    }
    console.log(toplam);
    // return toplam;
}
