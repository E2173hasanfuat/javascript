//fetch(file) fetch bize promise donuyor
// function getStudents(url) {
//     fetch(url)
//    .then((response)=>{
//     return response.json();
//    })
//    .then((data)=>console.log(data))
//    .catch((err)=>console.log(err))
   

// }

// getStudents("students.json")

// function getData(url) {
//    return  fetch(url)//sana gelen url e bana bir istek at
//     .then((response)=>{ //sen bana promis doneceksin  //response tipinde promise donuo
//         return response.json();
//        })
//        .then((data)=>console.log(data)) //
//        .catch((err)=>console.log(err))
    
// }
// getData("https://jsonplaceholder.typicode.com/albums")
// .then((response)=>{ //sen bana promis doneceksin  //response tipinde promise donuo
//     return response.json();
//    })
//    .then((data)=>console.log(data))
//    .catch((err)=>console.log(err))

// function getData(url) {
//     const promise = fetch("https://jsonplaceholder.typicode.com/albums")
//     console.log(promise)
//     getData("https://jsonplaceholder.typicode.com/albums");
// }

//promisi degil icindeki .json i kullanmak istiyorum o nedenle ikinci kez then i kullanioz

function saveStudents() {
    fetch("https://jsonplaceholder.typicode.com/albums",{
        method:"POST",
        headers : {
            "Content-Type" :"application/json"
        },
        body:JSON.stringify( {
            "id":2,
            "firstName":"hasan",
            "Lastname":"akdag"
        })
    })
    

}