const DOMSelectors = {
    button: document.getElementById("btn"),
    cardBox: document.getElementById("inputs"),  // Card container
    inputBox: document.getElementById("card-box"), // Input container
    textInput: document.getElementById("input-text"),
    imageInput: document.getElementById("input-image"),
    clearbutton: document.getElementById("cbtn")

};

DOMSelectors.button.addEventListener("click", function(){
    let imageUrl = DOMSelectors.imageInput.value;
    let textValue = DOMSelectors.textInput.value; 
    let inputHTML = `
       <div class="card">
            <h2> ${textValue} </h2>
            <img src="${imageUrl}" alt="Image" class ="image">
            
        </div>
        `;
    
    DOMSelectors.inputBox.insertAdjacentHTML("beforeend", inputHTML);
    DOMSelectors.textInput.value = "";
    DOMSelectors.imageInput.value = "";

});

DOMSelectors.clearbutton.addEventListener("click", function() {
    location.reload();
})

