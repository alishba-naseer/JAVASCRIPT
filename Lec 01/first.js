 console.log("Welcome to Smart Coders!");
 console.log("Hello Guys");
 console.log("I love Javascript!");

fullName = "Alishba Naseer";
console.log("fullName");

fullName = "Alishba Naseer";
console.log(fullName)

age = 24;
console.log(age);

price = 99.99;
console.log (price);

x = "null";
console.log(x);

y = "undefined";
console.log(y);

isFollow = false;
console.log(isFollow);

isFollow =true;
console.log(isFollow);

//                                               RESERVED WORDS

// console = "apna college";
// console.log(console);

Console = "apna college";
console.log(Console);
//                                              LET , VAR , CONST
var age = 24;
var age = 56;
var age = 86;
console.log(age);

let a;
a=10;
console.log(a);

const PI = "3.14";
console.log(PI);
//                                             give value to inatiallized
// const a;
const c = 10;
console.log(c);

{
    let a = 5;
    console.log(a); 
}

{
    let a = 10;
    console.log(a);
}

// let age = 18;
// age = 20;
// age = 25;
// console.log(age);


//                                    VARIABLES DATA TYPSE      1)Primitive  (7)              2)Non Primitive
                                      
//                                 PRIMITIVE DATA TYPES :-
//                                 NUMBERS

let base = 10;
let petrol = 100.05;

//                                           STRINGS
  let name ="Alishba Naseer";                             
                                        
//                                           Boolean
  isFollow = true;
  isFollow = false;

//                                           UNDEFINED
       
    let z ;
                       
//                                              NULL

let n = null;
               
//                                               BIGINT
let b = BigInt("123");

//                                              SYMBOL
let s = Symbol("Hello!");

//                                             OBJECTS

const student = {
   name : "Amna",
   age : 24,
   cgpa : 8.2,
   ispass : true,

};
console.log(student)

console.log(student["name"]);
console.log(student.cgpa);

student["age"] = student["age"] + 2
console.log(student["age"]);

student["name"] = "Alishba";
console.log(student.name);

console.log(typeof student.name);