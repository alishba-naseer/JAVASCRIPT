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

//! PRACTICE Q02 For a given array with price of 5 items -> [250,645,300,900,50] All items have an offer of 10% OFF on them . Change the array to store final price after applying offer.

let items = [250,645,300,900,50];
// let i = 0
// for (let val of items){
//   console.log(`Value at index ${i} = ${val}`);
//   let offer = val / 10;
//   items[i] = items[i] - offer;
//   console.log(`Value after offer = ${items[i]}`);
//   i++;
// }

     
for (let i = 0; i < items.length; i++){
  let offer = items[i] / 10;
  items[i] -= offer;
}
console.log(items);

//?                                     ARRAY METHODS -> Push()
let foodItems = ["Apple","Lychee","Potato","Tomato"];
console.log(foodItems);

foodItems.push("Chips","Burger","Chocolate");   // Push -> add to end
console.log(foodItems);

let deletedItems = foodItems.pop();           //? Pop -> delete form end and return 
console.log(foodItems);
console.log(`deleted item "${deletedItems}"`);  

let marksStr = [50,60,70,80,90];
console.log(marksStr.toString());

//?                                         CONCAT() -> Join multiple arrays and return result
  let marvelHeroes = ["Thor","Spiderman","Ironman"]; 
  let dcHerose = ["Superman","Batman"];
  let pakHeroes = ["Quaid-e-Azam","Allama Iqbal"];
  let Heroes = marvelHeroes.concat(dcHerose,pakHeroes);
  console.log(Heroes);


//?                                  UNSHIFT() ->add to start
  let fruits = ["Apple","Peach","Lychee"];
    fruits.unshift("Mango");
   console.log(fruits);

//?                                    SHIFT() -> delete from start and return 
  let veggies = ["Potato","Tomato","Chilli"];
  let val = veggies.shift();
  console.log(`Deleted value = "${val}"`);    

//?                                    SLICE() -> return a piece of array
   let sportsGames = ["Hockey","Cricket","Football","TableTennis","Badminton","Basketball"];
   console.log(sportsGames);
   console.log(sportsGames.slice(1,4));

//?                                     SPLICE() -> change original array -> (add, remove, replace)  
  let arr = [1,2,3,4,5,6,7];
  //  arr.splice(2,2,101,102);
  // console.log(arr);

  //?ADD ELEMENT

  // arr.splice(2,0,101);
  // console.log(arr);

  //? DELETE ELEMENT

  // arr.splice(3,1);
  // console.log(arr);

  //? REPLACE ELEMENT
  arr.splice(3,1,101);
  console.log(arr);

//! PRACTICE QNO3 -> Create an array to store companies -> "Bloomberg","Microsoft","Uber","Google","IBM","Netflix"   a) Remove the first company from the array. b) Remove the Uber and Ola in its place.  c) Add Amazon at the end.

  let companies = ["Bloomberg","Microsoft","Uber","Google","IBM","Netflix"];
  // console.log(companies);

  // companies.shift();         //Ans a)
  // console.log(companies);

  // companies.splice(2,1,"Ola");   //Ans b)
  // console.log(companies);

  companies.push("Amazon");          //Ans c)
  console.log(companies);