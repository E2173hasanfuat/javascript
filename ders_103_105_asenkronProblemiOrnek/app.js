const users=[
    {
        userId:5,
        post:"enes Post 1"
    },
    {
        userId:5,
        post:"enes Post 2"
    },
    {
        userId:5,
        post:"enes Post 3"
    },
    {
        userId:6,
        post:"ali Post 1"
    },
    {
        userId:7,
        post:"betul Post 1"
    }
]
//userId
//post post by usr id

//senkrona cevirecegiz
//callback(en dandigi)-promise --asyn await
function getUserId(callback) {
    setTimeout(() => {
        //servis e gidip aldik
        // return 5;
            let userId=5;
            callback(userId); //bu callback getPstByIdSuer methodumu calistiriyor
    }, 3000);
}
//senkron sirayla calisan demek
function getPstByUsrId(userId) {
    
    //gercek bir rest api ye istek atacaksiniz
    setTimeout(() => {
      users.forEach((user)=>{
        if (user.userId===userId) {
            console.log(user.post);
        }
      })  
    }, 2000);
}

getUserId(getPstByUsrId);

// let userId =getUserId();
// getPstByUsrId(userId);




//callback***********************************
//todo kullanlimio en eski surum  ==>>-promise --asyn await
//bir fonksiyonu bir fonsiyona parametre gecerek asenkronu senkrona cevirir

function getName(callback) { //callback=gersurname
   setTimeout(() => {
   
    let name ="Hasan"
    callback(name)
   }, 1000);
}

function getsurName(name, callback) {
    setTimeout(() => {
        let surname ="akdag";//name e gore ismi buldu servisten
        callback(surname)
       }, 500);
}
// getName(getsurName);
getName((name)=>{  
    getsurName(name, (surname)=>{
            console.log(name, surname);
    })
            //    console.log(name);     //burdaki funksiyonu yukardaki call backe setledim. artik yukarida call back calisinca buradaki funsiyonu calistiracak
})


//todocallback funsiyon alirim dio uzerine gelince
//iksii aynanda calismaya basladi yarim saniye gecer gecmez ekranda akdag
//getName();
//  getsurName()



