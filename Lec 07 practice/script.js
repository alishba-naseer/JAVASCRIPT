//?  Qs1 Create a new button element.Give it a text "click me",background color red & text color white.Insert the button as the first element inside the body tag. 
let newBtn = document.createElement("button");
newBtn.innerText = "Click me!"
newBtn.style.backgroundColor = "red";
newBtn.style.color = "white";
document.querySelector("body").prepend(newBtn);

//? Qs2 Create a <p> tag in html, give it a class and some styling. Now create a new class in CSS and try to append this class to the <p> element.
let para = document.querySelector("p");
para.classList.add("newClass");