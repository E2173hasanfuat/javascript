class MigrosBase {
    indirimOrani = 20;

    
    constructor(isim, soyisim, kartVarmi, urunler) {
        this.isim = isim;
        this.soyisim = soyisim;
        this.kartVarmi = kartVarmi;
        this.urunler = urunler;
    }

    hesapla() {
        let odenecekTutar = 0;
        if (this.urenleriKontrolEt(this.urunler)) {
            //sepetim dolu
            if (this.kartVarmi) {
                this.urunler.forEach((urun) => {
                    odenecekTutar += (urun.fiyat * (100 - this.indirimOrani) / 100)

                });

            } else {
                this.urunler.forEach((urun) => {
                    odenecekTutar += urun.fiyat;
                })

            }

        } else {
            alert("en az bir tane urun satin almalisiniz")
        }
        return odenecekTutar;
    }

    urenleriKontrolEt(urunler) {
        if (urunler != null && urunler.length > 0) {
            return true;
        }
        return false;
    }

}