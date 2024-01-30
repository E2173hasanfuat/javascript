// console.log(this);

class Person { //extends Object
    // constructor(firstName){
    //     this.firstName = firstName;
    // }
    // firstName = "Enes";
    // write() {
    //     console.log(this.firstName);
        // console.log(this);
        // console.log(toString());
    // }

    constructor(firstName, lastName, salary){
        this.firstName =firstName,
        this.lastName =lastName,
        this.salary =salary
    }
    writeInfo(){
            console.log(this.firstName,this.lastName,this.salary);
    }
}
class Student extends Person {
    // write() {
    //     super.write(); 
    //      console.log(this);
    // }
constructor(firstName, lastName, salary){
    super(firstName,lastName,salary);
}
writeInfo(){
    super.writeInfo()
}
}

class Engineer extends Person{
constructor(firstName, lastName, salary){
    super(firstName, lastName, salary)
}

writeInfo(){
    super.writeInfo()
}
}


const student1 = new Student("enes","bayram",10000);
const engineer1 = new Engineer("hasan", "akdag",5000);

student1.writeInfo();
engineer1.writeInfo();
// const student1 = new Student();
// student1.write()

//bir sinif olusturuldugu zaman otomatik kendini exten eder



