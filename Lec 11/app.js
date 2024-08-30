// ?                      PROTOTYPE in Js 

const student = {
    name : "Alishba Naseer",
    marks : 94.4,
    printMarks() {
        console.log('marks =', this.marks);
    },
};

const employee = {
    calcTax(){
        console.log("tax rate is 10%");
    },
}

const aliZafar = {
    salary : 50000,
    calcTax(){
       console.log("tax rate is 20%");
    },
};

aliZafar.__proto__ = employee;    // If objects and prototype have same method , objects method will be used. 

// ?                         CLASSES in Js
class ToyotaCar {
    constructor(brand , milage){       //automatically invoked by new  & initialize obj
        console.log("Creating new objects")
        this.brand = brand;
        this.milage = milage;
    }
    start() {
        console.log("start")
    }

    stop() {
        console.log("stop")
    }
}

// Create obj from class

let fortuner = new ToyotaCar("fortuner" , 10);
console.log(fortuner);
let lexus = new ToyotaCar("lexus" , 12);
console.log(lexus);

//?         INHERITANCE in Js -> passing down prop & methods from Parent class to child class  

class Person{
    eat() {
        console.log("eat")
    }

    sleep() {
        console.log("sleep")
    }

    work() {
        console.log("do nothing")
    }
}

class Engineer extends Person {
    work() {
        console.log("Solve problem , build something")
    }  // if child and parent have same method child method will be used [Method overriding]
}

let engObj = new Engineer();

//?                  SUPER KEYWORDS ->call the constructor of its parent class to access the parent properties and methods.

class People {
    constructor(name) {
        this.species = "Homo sapiens";
        this.name = name;
    }

    walk() {
        console.log("walk")
    }

    work() {
        console.log("do nothing")
    }
}

class Doctor extends People{
    constructor(name) {
        super(name);  // to invoke parent class constructor
    }
    work() {
        super.work();
        console.log("Treat patients")
    }
}

let doctorObj = new Doctor("Alishba");

//!  PRACTICE QN01 -> You are creating a website for your college. Create a class User with 2 properties , name and email. It also has a method called viewData() that allows user to view website data.

let data = "Secret information";
class User{
    constructor(name , email) {
        this.name = name;
        this .email = email;
    }

    viewData() {
        console.log("Data =", data);
    }
}

let student1 = new User("Alishba" , "alishba@gmail.com");
let student2 = new User("Amna" , "amna@gmail.com");

//! PRACTICE QN02 -> Create a new class called Admin which inherits from User. Add a new method called editData to Admin that allows it to edit website data.

class Admin extends User {
    constructor (name , email){
        super(name , email)
    }

    editData () {
        data = "some new value";  
    }
}

let admin = new Admin ("admin" , "admin@gmail.com");

//?              (Extra)              ERROR Handling

let a = 5;
let b = 10;
console.log("a =", a);
console.log("b =", b);
console.log("a+b =", a+b);

try {
    console.log("a+c =", a+c);  // error
} catch (err) {
    console.log(err)
}

console.log("a-b =", a-b);
console.log("a*b =", a*b);
console.log("a/b =", a/b);

