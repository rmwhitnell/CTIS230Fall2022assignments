// Step 0: What do we want to do? Change the color and the 
// size and the content of the text 
// when the user moves the mouse over it, and change it 
// back when the user moves off the text

// Step 1: Get the element that we want to affect and
// store it away so that we're ready to respond to the
// event

ourText = document.getElementById("newtext");

// This code asks the document for the element that has
// id newtext and stores the response in something named
// ourText

// Step 2: We want to tell ourText to change when the
// mouse moves over it, so we attach an event listener
// named onMouseOver to ourText

ourText.addEventListener("mouseover", onmouseover);

// Here's our event listener
function onmouseover() {
    ourText.style.color = "green";
    ourText.style.fontSize = "3em";
    ourText.innerHTML = "And we changed the text";
}

// Need another event listener to respond to the mouse moving off
ourText.addEventListener("mouseout", onmouseout);

function onmouseout() {
    ourText.style.color = "black";
    ourText.style.fontSize = "1em" //1em is the standard font size
    ourText.innerHTML = "<strong>And we changed it back</strong>";
}

myCard = document.getElementById("card"); // get the div that holds the card image
// Get the button with the id mybutton and store it away
ourButton = document.getElementById("mybutton");
// Tell the button which event listener is attached to it when the user clicks on it
ourButton.addEventListener("click", onClick);
// Write the event handler
function onClick() {
    ourText.innerHTML = "I clicked the button";
    ourText.style.fontSize = "2em";
    myCard.style.display = "block"; // Now make the image appear by changing display from "none" to "block"
}

// Get the textfield with the id myinput
ourInput = document.getElementById("myinput"); // this contains the new text
ourHeading = document.getElementById("header"); // what we're going to modify 

// Tell the textfield what event listener is connected to its events
ourInput.addEventListener("change", changeText); // the text in the field changes
ourInput.addEventListener("blur", changeText); // the text field loses focus
// the text field has focus when we're typing into it
// when we click out of it, the text field loses focus, and that generates
// a blur event

function changeText() {
    // Get the text that the user entered
    newtext = ourInput.value; //we ask ourInput for its value, which is the entered text
    ourHeading.innerHTML = newtext;
}

myCardImage = document.getElementById("cardimage");
myCard.addEventListener("click", changeImage);

function changeImage() {
    if (myCard.style.position == "") { // this asks whether the myCard div is in its original positio
        myCard.style.position = "absolute"; // make the postion of the div absolute and 100px from the top left corner
        myCard.style.top = "100px"; 
        myCard.style.left = "100px";
        myCardImage.style.width = "80px"; // make the width of the image 80px
        // not the width of the div because that won't affect how wide the image is
        myCardImage.src="images/2_of_diamonds.png"; // change the image file so a different image displays
    
    }
    else {// otherwise, the card is moved and small
        myCard.style.position = ""; // "" for a property value means use the original value when the page loaded
        myCard.style.top = "";
        myCard.style.left = "";
        myCardImage.style.width = "auto"; // return the image size to its full value
        myCardImage.src = "images/2_of_clubs.png";
    }

}



