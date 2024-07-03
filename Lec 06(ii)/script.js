//   let div = document.querySelector("div");
//   console.dir(div);

//   let heading = document.querySelector("h1");

//?                   Practice Qn01 
  let h2 = document.querySelector("h2");
  console.dir(h2.innerText);
  h2.innerText = h2.innerText +" from Apna college students."

//?                 Practice Qno2
  let divs = document.querySelectorAll(".box");
  let idx = 1;
  for (div of divs) {
    div.innerText = `New unique val of ${idx}`;
    idx++;
  }
//   divs[0].innerText = "Unique val 1"
//   divs[1].innerText = "Unique val 2"
//   divs[2].innerText = "Unique val 3"