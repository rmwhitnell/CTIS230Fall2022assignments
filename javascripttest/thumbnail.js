// Grab the largeview and card1 elements to manipulate later

mybigimage = document.getElementById("largeview");
card1 = document.getElementById("card1");

// make something happen when we click on them

card1.addEventListener("click", makeBigImage);
mybigimage.addEventListener("click", hideBigImage);

// Have the document hide the big image whenever the user presses any key
document.addEventListener("keyup", hideBigImage);

function makeBigImage() {
    // first be sure that the largeview element has no leftover HTML
    mybigimage.innerHTML = '';
    // add an img element as a child of this largeview element
    bigimage = document.createElement("img");
    // now is when we load the big image from the server
    bigimage.src ="images/2_of_clubs.png";
    // make this new element a child of the div for the big image
    mybigimage.appendChild(bigimage);
    // remove the dontshow class so that the div element is displayed
    mybigimage.classList.remove("dontshow");
}

function hideBigImage() {
    // Just add the dontshow class back to that div, and the CSS rule for dontshow takes effect again
    mybigimage.classList.add("dontshow");
}