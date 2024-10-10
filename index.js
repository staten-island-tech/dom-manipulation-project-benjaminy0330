const DOMSelectors = {
    header: document.querySelector("h1"),
    items: document.querySelectorAll("li"),
    cardHeader: document.querySelector(".card-header"),
    button: document.querySelector(".btn"),
    form: document.querySelector(" .form")
};

DOMSelectors.button.addEventListener("click", function(){
    console.log(event.target.parentElement);
    event.target.style.backgroundColor = "red";
});


// select all buttons as nodelist(can use foreach)
const buttons = document.querySelectorAll("button");
//make array from buttons if i want to use filter etc,
const newButtons = Array.from(buttons);console.log(newButtons);
//iiternate vthrough array and change each buttons color
newButtons.forEach((button) => (button.style.backgroundColor));
 newButtons.forEach((button)=> button.addEventListener("click", function(event){
 console.log(event.target.parentElement);
 })
);

let movie = {
    title: "Star Wars",
    release: 1977,
};



DOMSelectors.container.insertAdjacentHTML("beforeend",
    `<div class ="card"> <h2 class ="card-header">${student}Some Text</h2></div>`
);




//1. create the html for inputs, cards, and containers

//2. select/query the HTML form and get values from inputs

//3. turn values into objects: Movie, Game, User, etc.

//4. insert card w/ object onto screen onto HTML

//5. add event lister for remove button in JS


