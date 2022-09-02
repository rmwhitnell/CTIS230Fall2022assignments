mytext = document.getElementById("mytext");

function formfunction() {
    // Just rewrite the current page with whatever is in the textfield
    document.write("<strong>" + mytext.value + "</strong>");
}