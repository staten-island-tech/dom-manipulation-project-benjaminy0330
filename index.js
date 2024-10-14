const DOMSelectors = {
    button: document.getElementById("btn"),
    cardBox: document.getElementById("inputs"),  // Card container
    inputBox: document.getElementById("card-box"), // Input container
    input: document.querySelector(`#input`),       // Input element
};

DOMSelectors.button.addEventListener("click", function(){
    let inputValue = DOMSelectors.input.value; 
    let inputHTML = `
        <div class="card">
            ${inputValue}
        </div>
    
    `;
    DOMSelectors.inputBox.insertAdjacentHTML("beforeend", inputHTML);
    DOMSelectors.input.value = "";
});
