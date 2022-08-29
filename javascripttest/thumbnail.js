// Grab the largeview and card1 elements to manipulate later

mybigimage = document.getElementById("largeview");
card1 = document.getElementById("card1")

// make something happen when we click on them

card1.addEventListener("click", makeBigImage)
mybigimage.addEventListener("click", hideBigImage)

function makeBigImage() {
    // first be sure that the largeview element has no leftover HTML
    mybigimage.innerHTML = '';
    // add an img element as a child of this largeview element
    bigimage = document.createElement("img");
    bigimage.src ="images/2_of_clubs.png";
    mybigimage.appendChild(bigimage);
    mybigimage.classList.remove("dontshow");
}