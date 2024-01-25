"use strict"
// let sayi =prompt("sayi");

// switch (sayi)
//  {
//     case "1":
//         //todo kodlarini
//         console.log("girilensayi 1 dir");
//         break;
//     case "2":
//         //?kodlarin
//         console.log("2dir");
//         break;
// case "3":
//     console.log("3dur");
// break;



//     default:
//         console.log("1-3 arasi gir lo");
//         break;
// }


let yeniSatir = "\r\n";
let metin = "1-Pazartesi " + yeniSatir
    + "2-Sali" +yeniSatir
    + "3-Car" +yeniSatir
    + "4-Per" +yeniSatir
    + "5-Cuma" +yeniSatir
    + "6-C.tesi" +yeniSatir
    + "7-Pazar" +yeniSatir
    +"lutfen gun seciniz";

    let deger =prompt(metin)
    switch (deger) {
        case "1":
            console.log("monday");
            
            break;
            case "2":
                console.log("tuesday");
                break;
                case "3":
                    console.log("wednesday");
                    break;
                    case "4":
                        console.log("donnerstag");
                        break;
                        case "5":
                            console.log("fritag");
                            break;
                            case "6":
                                console.log("samstag");
                                break;
                                case "7" :
                                    console.log("sontag");
                                    break;

    
        default:
           console.log("deger gir");
    }