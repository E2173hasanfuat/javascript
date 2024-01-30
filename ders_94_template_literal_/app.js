function write(firstName, lastName) {
    // console.log("isim: " + firstName + " "+ "soyisim:" + lastName);
    console.log(`
                    isim: ${firstName} 
                    soyisim: ${lastName}  
                 `);
}

write("hasan", "akdag")

function getUserById(userId){
// fetch("http://localhost:8080/users/5")  //e kadar degismez sonrawsi degisen
// fetch(`http://localhost:8080/users/${userId}`)  
console.log(`http://localhost:8080/users/${userId}`);
}
getUserById(10)