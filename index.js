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
