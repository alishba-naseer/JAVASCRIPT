//?           FETCH API
//todo  Send & receive data -> use request and response obj -> API stands application programming interface.

const URL = "https://cat-fact.herokuapp.com/facts";
const paraFacts = document.querySelector("#facts");
const btnFact = document.querySelector("#btn");

const getFacts = async () => {
    console.log("getting data...");
    let response = await fetch(URL);
    console.log(response);  // JSON format
    // console.log(response.status);
    let data = await response.json();
    // console.log(data[0].text);
    paraFacts.innerText = data[4].text;
}

btnFact.addEventListener("click" , getFacts);

//? Same work with promise chaining
// function getFacts (){
//     fetch(URL)
//     .then((response) => {
//         return response.json();
//     })
//     .then((data) => {
//         console.log(data);
//         paraFacts.innerText = data[4].text;
//     })
// }