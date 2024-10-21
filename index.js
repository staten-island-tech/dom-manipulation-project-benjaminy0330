const DOMSelectors = {
    button: document.getElementById("btn"), //submit button
    cardBox: document.getElementById("card-holder"),  //div where inserted material is added to html
    textInput: document.getElementById("input-text"), //text that is added
    subInput: document.getElementById("input-sub"), //subtitle text that is added
    imageInput: document.getElementById("input-image"), //img url that is addedd
    clearbutton: document.getElementById("cbtn"), //button that clears page
    
    
    

};

DOMSelectors.button.addEventListener("click", function(){
    let imageUrl = DOMSelectors.imageInput.value;
    let textValue = DOMSelectors.textInput.value; 
    let subValue = DOMSelectors.subInput.value;
    
    let inputHTML = `
       <div class="card" id = "card" >
            <h2> ${textValue} </h2>
            <img src="${imageUrl}" alt="User inputed image" class ="image">
            <p> ${subValue} </p>
            <button type="button" id="dbtn" class = "dbtn">Remove</button>
        </div>
        `;

    
    DOMSelectors.cardBox.insertAdjacentHTML("beforeend", inputHTML); //puts card into cardBox
    clearinput();
   

});



function clearinput(){
    DOMSelectors.textInput.value = "";
    DOMSelectors.subInput.value = "";
    DOMSelectors.imageInput.value = "";
}






DOMSelectors.clearbutton.addEventListener("click", function() {
    location.reload(); //refreshes page to clear all created cards
});

//h1.remove();
//<button type="button" id="dbtn">Remove</button>
//deletebutton: document.getElementById("dbtn"),