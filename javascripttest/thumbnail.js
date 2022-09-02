// Grab the largeview and card1 elements to manipulate later

mybigimage = document.getElementById("largeview");
card1 = document.getElementById("card1");

// make something happen when we click on them

card1.addEventListener("click", makeBigImage);
mybigimage.addEventListener("click", hideBigImage);

staticimage = document.getElementById("staticview");
gifimage = document.getElementById("gifview");

staticimage.addEventListener("mouseover", showGIF);
gifimage.addEventListener("mouseout", hideGIF);

function showGIF() {
    // remove the dontshow class from the gif so it will display
    gifview.classList.remove("dontshow");
    // add the dontshow class to the static image so it will not display
    staticview.classList.add("dontshow");
}

function hideGIF() {
    // add the dontshow class to the gif so it will not display
    gifview.classList.add("dontshow");
    // remove the dontshow class from the static image so it will display
    staticview.classList.remove("dontshow");

}

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