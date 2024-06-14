//?                       FUNCTIONS IN JS  -> Functions Definations
 function myFunction (){
    console.log("Welcome to smart coders");
    console.log("We are learing JS");
 } 

 myFunction();      //?   function call

 function toWrite (msg){
    //   Parameter -> input
    console.log(msg);
 }

 toWrite("I love JS");      // argument 

 //?                    FUNCTION -> 2 num sum
 function sum (x , y){
    console.log(x + y);
 }
 sum(3 , 7);

 function sub (x , y){
   s = x - y;
   return s;
 }
 let val = sub (3 , 5);
 console.log(val);

//?                              ARROW FUNCTIONS  ->  Modern in JS
   //sum function    
  function add(a , b){
   return a+b;
 }

 //? arrowfunction sum version  
 const arrowSum = (a , b) => {
   // console.log(a + b);
   return a+b;
 }

 //multiple function
 function mul(a , b){
   return a*b;
 }

 //? arrowfunction multiple version  
  const arrowMul = (a , b) => {
   return a*b;
  }

  const printHello = () =>{
   return "hello";
  }

//! PRACTICE Qn01 -> Create a function using the "function" keyword that takes a string as argument and return the number of vowels in the string.
  function countVowels (str) {
   let count = 0;
   for (const char of str) {
      // console.log(char);
      if (char === "a" ||
          char === "e" ||
          char === "i" ||
          char === "o" ||
          char === "u") {
         count ++;
      }
   }
   return count;
  }

//! PRACTICE Qn02 -> Create an arrow function to perform the same task.
 const countVow = (str) => {
   let count = 0;
   for (const char of str) {
      // console.log(char);
      if (char === "a" ||
          char === "e" ||
          char === "i" ||
          char === "o" ||
          char === "u") {
         count ++;
      }
   }
   return count; 
 }

//?                            For each LOOP
  let arr = ["Faisalabad","Lahore","Multan"];
   arr.forEach((val ,idx , arr) => {
   console.log(val.toUpperCase() , idx , arr);
 }); 
 
//! Practice Qno3 -> For a given array of numbers, print the square of each value using the forEach loop.

 let nums = [2,4,5,6,7,67,45];
 nums.forEach((num) => {
   console.log(`Square of ${num} = ${num * num}`);
 });

//?   Another way 
 let divide = [30,25,250];
 let calDivision = (divide) =>{
   console.log(`${divide} divide by 5 = ${divide / 5 }`);
 }
 divide.forEach(calDivision);

//?                               MAP -> create new array
 let numbers =[6,8,10,12,14];
   numbers.map((val) => {
  console.log(val);
  });

//? Another way
  let numb = [12,14,16,18];
  let newArray = numb.map((val) => {
    return val * 2;
    });
  console.log(newArray);

//?                           FILTER -> condition true
 let array = [1,2,3,4,5,6,7,8,9];
 let evenArr = array.filter((val) => {
  // return val % 2 === 0;  
  // return val % 2 !== 0;  
  return val > 3;  
 });
 console.log(evenArr);

//?                     REDUCE -> calculate and return the single value
  let reduceArr = [1,2,3,4];
  let output = reduceArr.reduce((res , curr) => {
    return res + curr;
  });
  console.log("Sum of total value =", output);

//?   Maximum number calculate
 let maxArr = [89,101,200,500];
 let maxOutput = maxArr.reduce((pre , curr) => {
  return pre > curr ? pre : curr;
 });
  console.log("Maximum num =", maxOutput);

//! PRACTICE QNO4 -> We are given array of marks of students. Filter out of the marks of students that scored 90+ .
  let stuMarks = [97,64,32,49,99,96,86];
  let marksOutput = stuMarks.filter((val) => {
    return val > 90 ;
  });
  console.log(marksOutput);

//! PRACTICE QNO5 -> Take a number n as input from user. Create an array of numbers from 1 to n. Use the reduce method to caculate sum of all numbers in the array. Use the reduce method to calculate product of all numbers in the array.
  let n = prompt("Enter a number :");
  let Arr = [];
  for (let i = 1; i <= n; i++){
    Arr[i-1] = i;
  }
  console.log(Arr);

  let sumValue = Arr.reduce((res , curr) => {
    return res + curr;
  });
  console.log("Sum value =", sumValue);

  let factorial = Arr.reduce((res , curr) => {
    return res * curr;
  });
  console.log("Factorial value =", factorial);