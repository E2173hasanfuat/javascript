//1-pending bekleme, 2 fulfilled /resolve ,success 3-rejected-basarisiz

//resolve=> then  reject =>catch

//?PROMISE
//asenkron yapilari senkrona cevirmek icin kullanilirli. callbacklerin ust versionu
const check = true;
// const promise1 =new Promise((resolve,reject)=>{
// if (check) {
//     resolve("promise basarili")
// } else {
//     reject("promise basarisiz")
// }
// })
// console.log(promise1);

// function createPromise() {
//     return new Promise((resolve, reject) => {//return newPromise
//         if (check) {
//             resolve("promise ist ok")

//         } else {
//             reject("siknti gross")
//         }
//     })

// }
// //simdi then le yakala yada catch eger reject se
// createPromise() //kullan yukarda hazirladigini
//     .then((response) => {
//         console.log(response);
//     })
//     .catch((error) => {
//         console.log(error);
//     })
//     .finally(() => console.log("hep calisula")) //herzaman calisiri


// //ornek PROMISE +xhmlhttprequest(asyn) le kullanalim=>senkrona cevir

// function readStudents(url) {
//     return new Promise((resolve, reject) => {
//         const xhr = new XMLHttpRequest();
//         try {
//             xhr.addEventListener("readystatechange", () => {
//                 if (xhr.readyState === 4 && xhr.status === 200) {
//                     resolve(JSON.parse(xhr.responseText));

//                 }
//             })

//         } catch (error) {
//             reject(error);
//         }

//         xhr.open("GET", url);
//         xhr.send();
//     })

// }

// readStudents("students.json")
//     .then((data) => console.log(data))
//     .catch((err) => console.log(err))


// /***************************************** */
//     function getUsers(url) {
//         return new Promise((resolve, reject) => {
//             const xhr = new XMLHttpRequest();
//             try {
//                 xhr.addEventListener("readystatechange", () => {
//                     if (xhr.readyState === 4 && xhr.status === 200) {
//                         resolve(JSON.parse(xhr.responseText));
    
//                     }
//                 })
    
//             } catch (error) {
//                 reject(error);
//             }
    
//             xhr.open("GET", url);
//             xhr.send();
//         })
    
//     }

//     function getCommentsByUserID(url) {
//         return new Promise((resolve, reject) => {
//             const xhr = new XMLHttpRequest();
//             try {
//                 xhr.addEventListener("readystatechange", () => {
//                     if (xhr.readyState === 4 && xhr.status === 200) {
//                         resolve(JSON.parse(xhr.responseText));
    
//                     }
//                 })
    
//             } catch (error) {
//                 reject(error);
//             }
    
//             xhr.open("GET", url);
//             xhr.send();
//         })
    
//     }

// getUsers("https://jsonplaceholder.typicode.com/users/3")
// .then((data) => {
//     console.log(data);
//     return getCommentsByUserID(`https://jsonplaceholder.typicode.com/comments/${data.id}`)
//     .then((res) => console.log(res))
   

    
//     // data.forEach((user) => {
//     //     console.log(user.name)
//     // });
 
// })
// .catch((err) => console.log(err))
// .finally(()=>{

// })


//*****

const p1=Promise.resolve("birinci promise basarili")
const p2=Promise.resolve("2 promise basarili")
const p3=Promise.resolve((resolve,reject)=>{
    resolve("3 promise basarili")
})
const p4=Promise.reject("hata var reyiz")
Promise.all([p1,p2,p3,p4])  //3 ude resolvsa than e biri bile hatali ise catsche giere
.then((res)=>{
     console.log(res);
    // for(let value of res){
    //     console.log(value);
    // }
})
.catch((err)=>console.log(err));