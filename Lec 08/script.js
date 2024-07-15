let btn = document.querySelector("#btn1");
btn.onclick = () => {
  console.log("Btn1 was clicked.");
};

let div = document.querySelector("#div1");
div.onmouseover = () => {
  console.log("You are inside div.");
};

//?                  Event object
let btn2 = document.querySelector("#btn2");
btn2.ondblclick = (evt) => {
  console.log(evt);
  console.log("Type =", evt.type);
  console.log("Target =", evt.target);
  console.log("Position X =", evt.clientX, ", Position Y =", evt.clientY);
};

//?                addEvent Listeners
let btn3 = document.querySelector("#btn3");
  btn3.addEventListener("click" , (evt) =>{
    console.log("addEventListener Activated.");
    console.log(evt);
    console.log("Type =",evt.type);
    console.log("Target =",evt.target);
  });

btn3.addEventListener("click", () => {
  console.log("Activated-handler1.");
});
btn3.addEventListener("click", () => {
  console.log("Activated-handler2.");
});
const handler3 = () => {
    console.log("Activated-handler3.");
  };
btn3.addEventListener("click" , handler3);

btn3.addEventListener("click", () => {
  console.log("Activated-handler4.");
});

//?   remove
btn3.removeEventListener("click" , handler3);

//?  Practice Qs01 -> Create a toggle button that changes the screen to dark-mode when clicked & light-mode when clicked again.
  let colorMode = document.querySelector("#btn4");
  let currMode = "light";
  let body = document.querySelector("body");
  colorMode.addEventListener("click" , ()=>{
    if(currMode === "light") {
        currMode = "dark";
        body.classList.add("dark");
        body.classList.remove("light");
    }else {
        currMode = "light";
        body.classList.add("light");
        body.classList.remove("dark");
    }
  console.log(currMode);
  });