const DOMSelectors = {
    button: document.getElementById("btn"), //submit button
    cardBox: document.getElementById("inputs"),  //div where inputs are put
    textInput: document.getElementById("input-text"), //text inputs
    imageInput: document.getElementById("input-image"), //img url input
    clearbutton: document.getElementById("cbtn") //clear button

};

//when click happens, code is inserted
DOMSelectors.button.addEventListener("click", function(){
    let imageUrl = DOMSelectors.imageInput.value;
    let textValue = DOMSelectors.textInput.value; 
    let inputHTML = ` 
       <div class="card">
            <h2> ${textValue} </h2>
            <img src="${imageUrl}" alt="Image" class ="image">
            
        </div>
        `; //thing being inserted into html
    
    DOMSelectors.inputBox.insertAdjacentHTML("beforeend", inputHTML);
    DOMSelectors.textInput.value = ""; //leaves input box blank after use
    DOMSelectors.imageInput.value = "";

});

DOMSelectors.clearbutton.addEventListener("click", function() {
    location.reload();
}) //when button is clicked, it refreshes the page


// ?? <button class="delete-btn">Delete</button>

