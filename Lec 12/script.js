// //?       SYNCRONOUS -> code runs in particular sequence of instructions given in the program
// console.log("one");
// console.log("two");
// console.log("three");

// //?                               ASYNCRONOUS
// //todo  Due to sync prog sometimes imp inst get blocked due to previous inst which causes delay -> Async allow to execute next inst immediately & doesn't block the flow.

// setTimeout(() => {
//   console.log("hello 4s");
// }, 4000); // 1s = 1000ms
// console.log("four");
// console.log("five");

// //?            CALLBACKS -> passed as an argument to another functions

// function sum(a, b) {
//   console.log(a + b);
// }

// function calculator(a, b, sumCallbacks) {
//   sumCallbacks(a, b);
// }
// calculator(1, 2, sum);

// //?            Another way
// calculator(1, 2, (a, b) => {
//   console.log(a + b);
// });

// const Hello = () => {
//   console.log("Hello coder 3s");
// };
// setTimeout(Hello, 3000);

//?                      Nesting
// let age = 19;
// if (age >= 18) {
//   if (age >= 60) {
//     console.log("Senior");
//   } else {
//     console.log("middle");
//   }
// } else {
//   console.log("child");
// }

// for (let i = 0; i < 5; i++) {
//   let str = "";
//   for (let j = 0; j < 5; j++) {
//     str = str + j;
//   }
//   console.log(i, str);
// }

// function getData(dataId , getNextData) {
//   setTimeout(() => {
//     console.log("data =", dataId);
//     if(getNextData){
//       getNextData()
//     }
//   } , 2000);
// }

//?      Callback hell
//todo  Nested callbacks stacked below one another forming a pyramid structure (pyramid of doom). this style become difficult to understand & manage.
// getData(1, () => {
//   console.log("getting data 2....");
//   getData(2, () => {
//     console.log("getting data 3....");
//     getData(3, () => {
//       console.log("getting data 4....");
//       getData(4);
//     });
//   });
// });

//?                 Promises
// todo  -> Eventual completion of task. It is an object in js -> solution to callback hell.
// let promise = new Promise((resolve, reject) => {
//   console.log("I am promise.");
//   // resolve("Success");
//   reject("some error occured");
// });

// ? when API send promises
// function getData(dataId, getNextData) {
//   return new Promise((resolve, reject) => {
//     setTimeout(() => {
//       // console.log("data =", dataId);
//       // resolve("Success");
//       reject("error");
//       if (getNextData) {
//         getNextData();
//       }
//     }, 5000);
//   });
// }

//? How to use promises

// const getPromise = () => {
//   return new Promise((resolve, reject) => {
//     console.log("I am promise.");
//     resolve("Success");
//     // reject("network error");
//   });
// };

// let promise = getPromise();

// //? fulfilled
// promise.then((res) => {
//   console.log("promise fulfilled" , res);
// });

// //? rejected
// promise.catch((err) => {
//   console.log("rejected" , err)
// })

//?  Promise chaining

// function asyncFunc1() {
//   return new Promise((resolve, reject) => {
//     setTimeout(() => {
//       console.log("data1");
//       resolve("success");
//     }, 4000);
//   });
// }
// function asyncFunc2() {
//   return new Promise((resolve, reject) => {
//     setTimeout(() => {
//       console.log("data2");
//       resolve("success");
//     }, 4000);
//   });
// }
// console.log("fetching data1...");
// asyncFunc1().then((res) => {
//   console.log("fetching data2...");
//   asyncFunc2().then((res) => {});
// });

// function getData(dataId) {
//   return new Promise((resolve, reject) => {
//     setTimeout(() => {
//       console.log("data", dataId);
//       resolve("Success");
//     }, 3000);
//   });
// }
// console.log("fetching data1...");
// getData(1)
// .then((res) => {
//   console.log("fetching data2...");
//   return getData(2);
// })
// .then((res) => {
//   console.log("fetching data3...");
//   return getData(3);
// })
// .then((res) => {
//   console.log(res)
// });

//?   Async-Await

// async function hello() {   // always return a promise
//   console.log("hello")
// }

// function api () {
//   return new Promise ((resolve , reject) =>{
//     setTimeout(() => {
//       console.log("weather data");
//       resolve(200);
//     } , 2000)
//   })
// }
// async function getWeatherData() {
//   await api();
//   await api();
// }

function getData(dataId) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      console.log("data", dataId);
      resolve("Success");
    }, 3000);
  });
}
async function getAllData() {
  console.log("getting data1....")
  await getData(1);
  console.log("getting data2....")
  await getData(2);
  console.log("getting data3....")
  await getData(3);
  console.log("getting data4....")
  await getData(4);
  console.log("getting data5....")
  await getData(5);
  console.log("getting data6....")
  await getData(6);
}

//?   IIFE 
//todo    immediately invoked function expression  -> as soon as it is defined.

(async function () {
  console.log("getting data1....")
  await getData(1);
  console.log("getting data2....")
  await getData(2);
  console.log("getting data3....")
  await getData(3);
  console.log("getting data4....")
  await getData(4);
  console.log("getting data5....")
  await getData(5);
  console.log("getting data6....")
  await getData(6);
})();