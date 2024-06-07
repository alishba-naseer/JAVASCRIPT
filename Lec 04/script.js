  //TODO                      ARRAYS -> collection of items

  let num = [97,82,75,64,36];
  console.log(num);
  console.log(num.length);
  console.log(num[3]= 100);         //Array value change
  console.log(num)

  let heroes = ["Thor","Ironman","Hulk","Spiderman","Wanda","Wonder women"];
  console.log(heroes);

//   TODO                       ARRAYS INDICES

  console.log("index 0 =",heroes[0]);
  console.log("index 1 =",heroes[1]);
  console.log("index 2 =",heroes[2]);
  console.log("index 3 =",heroes[3]);
  
//TODO                       LOOPING OVER AN ARRAY
//?                           -> for loop

  for(let i = 0; i < heroes.length; i++){
    console.log(heroes[i]);
  }

//?                          -> for of loop
  let cities = ["Faisalabad","Jarawala","Lahore","Multan"];
  for(let city of cities){
    console.log(city.toUpperCase());
  }

//! PRACTICE Qs01 -> For a given array with marks of student ->[85,97,44,37,76,60] Find the average marks of the entire class.

 let marks = [85,97,44,37,76,60];
 let sum = 0;
 for(let val of marks){
    sum += val ;
 }  
 console.log("Sum of 85,97,44,37,76,60 =", sum);
 let avg = sum / marks.length;
 console.log(`Avg marks of the class = ${avg}`);
