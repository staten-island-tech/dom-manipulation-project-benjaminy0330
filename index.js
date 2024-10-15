const DOMSelectors = {
    button: document.getElementById("btn"), //submit button
    cardBox: document.getElementById("card-holder"),  //div where inserted material is added to html
    textInput: document.getElementById("input-text"), //text that is added
    imageInput: document.getElementById("input-image"), //img url that is addedd
    clearbutton: document.getElementById("cbtn") //button that clears page

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
    
    DOMSelectors.cardBox.insertAdjacentHTML("beforeend", inputHTML); 
    DOMSelectors.textInput.value = "";
    DOMSelectors.imageInput.value = "";

});

DOMSelectors.clearbutton.addEventListener("click", function() {
    location.reload(); //refreshes page to clear all created cards
});