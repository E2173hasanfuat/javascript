// siniflarim hepsi ayni ust siniftan miras alir
//ust klasada yazariz sadece herkes mirasi alir

class Person {

    //araba
    firstname = "enes";

    //ev
    write() {
        console.log("Person sinifindan gelmektedir.", this.firstname);
    }
}

class Student extends Person {
    write() {
        console.log("Student write methodu ", this.firstname);
        super.write();
    }
}
const student1 = new Student();
student1.write();


// const person =new Person();
// person.write()