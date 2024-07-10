// ?              Attributes -> 1) get attr ("attr")  -> to get the attr val
let div = document.querySelector("div");
console.log(div);

let id = div.getAttribute("id");
console.log(id);

let name = div.getAttribute("name");
console.log(name);

let para = document.querySelector("p");
console.log(para.getAttribute("class"));

// ?        2) set attr ("attr" , "val")  -> set the attr val 

let paraGraph = document.querySelector("p");
console.log(paraGraph.setAttribute("class","newclass"));

  //?       NODE STYLE 
  div.style.backgroundColor = "blue";
  div.style.backgroundColor = "purple";
//   div.style.fontSize = "26px";
//   div.innerText = "Hello!";
//   div.style.visibility = "hidden";

//?       DOM Manipulation -> insert element 
let newBtn = document.createElement("button");
console.dir(newBtn);
newBtn.innerText = "Click me!"

//?        append -> add at the end of the node (inside)
// div.append(newBtn);

//?       prepend -> add at the start of the node (inside)
// div.prepend(newBtn);
let newHeading = document.createElement("h1");
newHeading.innerHTML = "<i>Hi , I am new!</i>";
document.querySelector("body").prepend(newHeading);

//?       before -> add before the node (outside)
// div.before(newBtn);

//?       after -> add after the node (outside)
// div.after(newBtn);

let p = document.querySelector("p")
p.after(newBtn);

//?       Delete element 
// p.remove();
// newHeading.remove();