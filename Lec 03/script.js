
//?                                            PRINT 1 TO 5

for (count = 1; count <= 5; count++){
    console.log("apna college");
}
console.log("loop ha ended");

//?                                        CALCULATE SUM 1 TO N

let sum = 0;
let n = 1000;
for (let i = 1; i <= n; i++){
    sum = sum + i;
}
console.log("sum =", sum);
console.log("loop has ended");

//TODO                                           WHILE LOOP

let i = 1;
while(i <= 10){
    // console.log("i =", i);
    console.log("Apna college");
    i++ ; 
}

//TODO                                          DO-WHILE LOOP

let a= 20;
do{
    console.log("Alishba");
    a++;
} while(a <= 10);

let b= 1;
do{
    console.log("b = ", b);
    b++;
} while(b <= 5);


//TODO                                          FOR-OF LOOP

let str = "ApnaCollege";
let size = 0;

for(let val of str){   
    console.log("val =", val)
    size++
}

console.log("String size =", size);

// TODO                                        FOR-IN LOOP

let student = {
    name : "Asad",
    age : 20,
    cgpa : 8.5,
    ispass : true,
};
 for(let key in student){
    console.log("key =", key , "value =", student[key]);
 }

//  !                                   PRACTICE QN01
//! Print all even numbers from 0 to 100.

for (let num = 0; num <= 100 ; num ++ ){
    if(num % 2 !== 0){
        console.log("num =", num);
    }
}

//  !                                   PRACTICE QN02
//! Create a game where you start with any random game number. Ask the user to keep guessing the game number until the user enters correct value.

//  let gameNum = 25;
//  let userNum = prompt("Guess the game number : ");

//  while (userNum != gameNum){
//     userNum = prompt("You entered wrong number . Guess again : ");
//  }
//  console.log("Conratulations, you entered the right number.");

//  ?                                      STRING IN JS
 let str2 = "Qirat";
 console.log(str2);
 console.log(str2.length);
 console.log(str2[0]);
 console.log(str2[1]);
 console.log(str2[2]);
 console.log(str2[3]);
 console.log(str2[4]);

 // ?                                    TEMPLATE LITERALS
 let specialString = `This is template literals ${1+2+3}`;
 console.log(specialString);

 let obj = {
    item : "pen",
    price : 20,
 };
 console.log("The cost of", obj.item ,"is", obj.price ,"rupees." ); //simple console

let output = `The cost of ${obj.item} is ${obj.price} rupees.`; // template literals
console.log(output);

console.log("Apna\ncollege");   //?  escape characters -> move to next line.
console.log("Apna\tcollege");   //?  tab space

let str3 = "Qirat\tFatima";
console.log(str3);
console.log(str3.length);

// ?                      STRINGS METHODS IN JS

// TODO                         UPPER CASE
let str4 = "asad naseer";
console.log(str4.toUpperCase());

let str1 = "sobia naseer";
// str1 = str1.toUpperCase();
let newStr = str1.toUpperCase();
console.log( `Original string = ${str1}`);
console.log( `Upper case string = ${newStr}`);

//TODO                              LOWER CASE

let str5 = "NASEER AHMAD";
str5 = str5.toLowerCase();
console.log(`Lower case = ${str5}`);

//TODO                          TRIM STRING -> removes extra space from start and end.
let str6 = "      I    love      js    ";
console.log(str6.trim());    

//TODO                 SLICE STRING -> give start and ending value -> but ending value is not included
 let str7 = "01234567";
 console.log(str7.slice(1 , 4));

 let say = "hello";
 console.log(say.slice(0, 4));

 //TODO             STRING CONCATANATION -> join str2 with str1

 let value1 = "apna";
 let value2 = "College";
//  let res = value1.concat(value2);
 let res = value1 + value2;

 console.log(res);


 let value3 = "apna";
 let value4 = "College";
 let result = "I am learning coding from " + value3 + value4 ;
 console.log(result);

 //TODO          STRING REPLACE -> use to search and replace the value
 let str8 = "Hello";
 console.log( "Hello = ", str8.replace("H" , "M"));
 console.log( "Hello = ", str8.replace("lo" , "p"));

 let str9 = "Hellololo";
 console.log( "Hellololo = ", str9.replace("lo" , "p"));
 console.log( "Hellololo = ", str9.replaceAll("lo" , "p"));

//TODO               STRING CHARACTER AT (INDEX)

let valueCheck = "Ilovejs";
console.log(valueCheck.charAt(0));
console.log(valueCheck.charAt(1));
console.log(valueCheck.charAt(2));
console.log(valueCheck.charAt(3));
console.log(valueCheck.charAt(4));
console.log(valueCheck.charAt(5));
console.log(valueCheck.charAt(6));

//! PRACTICE QN01 Prompt the user to enter their full name. Generate a username from them based on the input. Start username with @, followed by their full name and ending with the fullname length.
let fullName = prompt("Enter your fullname without space :");
let userName = "@"+ fullName + fullName.length;
console.log(userName);
