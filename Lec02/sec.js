//   Arithmetic operators

let a = 5; 
let b = 2;

console.log("a =", a ," & b =",b );
console.log("a + b =", a + b);
console.log("a - b =", a - b);
//                        MULIPLICATION
console.log("a * b =", a * b);
//                        DIVISION
console.log("a / b =", a / b);
//                        MODULUS
console.log("a % b =", a % b);
//                        EXPONENTIATION
console.log("a ** b =", a ** b);

/*                       -> UNARY OPERATOR
                            1) INCREMENT ++    */

// a = a + 1;

// a++
// console.log("a =", a); 

/*                          2)DECREMENT --     */
a--
console.log("a =", a); 


//                           POST PRE CONCEPT

let c = 6;
let d = 3;
console.log("c =", c ," &  d =", d );

console.log("c++ =", c++);
console.log("c =", c);              //post

// console.log("++c =", ++c);
// console.log("c =", c);          //pre

console.log("d-- =", d--);
console.log("d =", d);             //post

// console.log("--d =", --d );
// console.log("d =", d);          //pre

//                               ASSIGNMENT OPERATORS

let e = 5;
let f = 8;
console.log("e =", e, " &  f =", f);

// e += 4;
// console.log("e +=  =", e);

// f -= 4;
// console.log("f -=   =", f);

// e *= 4;
// console.log("e *=  =", e);

// f /= 4;
// console.log("f -=   =", f);

e %= 4;
console.log("e %=   =", e);

f **= 4;
console.log("f **=   =", f);

//                                 COMPARISION OPERATORS
 
let g = 5;
let h = 4;
let i = "4";

console.log("g =", g , "  h =", h , " &  i =", i);
console.log("5 == 4", g == h);
console.log("5 != 4", g != h);
console.log("h == i", h == i);
console.log("h === i", h === i);
console.log("h !== i", h !== i);
console.log("5 > 4 ", g > h);
console.log("5 < 4 ", g < h);
console.log("5 >= 4 ", g >= h);
console.log("5 <= 4 ", g <= h);

//                                     LOGIC OPERATORS
let j = 6;
let k = 2;

let cond1 = j > k;
let cond2 = j === 6;
let cond3 = k === 6;
console.log("j =", j , " &  k =", k );
console.log("cond1 && cond2", cond1 && cond2);
console.log("cond1 && cond3", cond1 && cond3);

//         we can also write condition as follow!
console.log("cond1 && cond2", j > k && k === 4);
console.log("cond1 || cond2", j > k || k === 6);
console.log("!(6 < 2 ) =", !(j < k));

//                                 CONDITIONAL STATEMENTS
//                                  use if statement

// let age = 25;
// if (age >= 18){
//     console.log("You can vote!");
// }

// let mode = "dark";
// let mode = "light";

// let color;

// if (mode === "dark"){
//     color = "black";
// }

// if (mode === "light"){
//     color = "white";
// }
// console.log(color);

//                              If-else Statement
let mode = "light";

let color;

if (mode === "dark"){
    color = "black";
}else {
    color ="white";
}
console.log(color);

let age = 25;
// let age = 15;

if (age > 18 ){
    console.log(age ,"vote");
}else {
    console.log(age, "Not vote");
}


let num = 10;
if (num % 2 === 0){
    console.log(num , "is even");
}else {
    console.log(num , "is odd");
}

//                        else-if statement
let background = "dark";      //blue , silver
let text ;
if(background === "dark"){
    text = "black";
} else if(background === "blue") {
    text = "blue";
}  else if(background === "pink") {
    text = "pink";
} else {
    text = "white";
}

console.log(text);

//                            Ternary operators
let cgpa = 4 ; // 2
let result = cgpa > 3 ? "pass" : "not pass";
console.log(result);

cgpa > 3 ? console.log("pass") : console.log("not pass");  //simpler , compact if else

//                               ALERT , PROMPT
// alert("hello !");
// let user = prompt("hello !");
// console.log(user);

//                                   PRACTICE
// let numb = prompt("enter a number:");

// if(numb % 5 === 0){
//     console.log(numb , "is a multiple of 5");
// } else {
//     console.log(numb , "is NOT a multiple of 5");
// }

// let score = 35;

let score = prompt("Enter your score(0-100):");
let grade;

if(score >= 90 && score <= 100){
    grade = "A";
} else if (score >= 70 && score <= 89){
    grade = "B";
}  else if (score >= 60 && score <= 69){
    grade = "C";
}  else if (score >= 50 && score <= 59){
    grade = "D";
}  else if (score >= 0 && score <= 49){
    grade = "F";
} 
console.log("According to your score, your grade was :", grade);
