  console.log("Hello!");
  window.console.log("Hello 2!");  //? console is the part of window.
// window.alert("Hello coders!");
  console.dir(document.body);    //? dir -> document -> properties + methods
  console.log(document.body);
  console.dir(document.body.childNodes[1]);
//   document.body.childNodes[3].innerText="Hello !";

//?   Selecting with id
  let heading = document.getElementById("heading");
  console.log(heading);
  console.dir(heading);

//?    Selecting with class
  let classes = document.getElementsByClassName("class-header");
  console.log(classes);
  console.dir(classes);

//?   Selecting with tags 
  let paras = document.getElementsByTagName("p");
  console.dir(paras);

//?  Query selector 
  let firstEle = document.querySelector("p");  //? return only first element
  console.dir(firstEle);

  let allEle = document.querySelectorAll(".para"); //? return a Nodelist
  console.dir(allEle);

  let button = document.querySelector("#button");
  console.log(button);

//? Properties -> inner text -> childern
  console.dir(document.body.firstChild);
  let childNodes = document.querySelector("div");
  console.log(childNodes);

  let firstChild = document.querySelector("div").children
  console.dir(firstChild); 