// Get the elements that can generate events
ucdiv = document.getElementById("uctext");
reeddiv= document.getElementById("reedtext");

// Get the elements that will be affected when the user generates an event
ucdiv.affect = document.getElementById("chicago");
reeddiv.affect = document.getElementById("reed");

// Add our event listeners to each element
// In JavaScript, hover is mouseover, ending hover is mouseout
ucdiv.addEventListener("mouseover", collegeOver);
reeddiv.addEventListener("mouseover", collegeOver);

ucdiv.affect.addEventListener("mouseout", collegeOut);
reeddiv.affect.addEventListener("mouseout", collegeOut);

function collegeOver(event) {
    // We can know information about the element that caused the event
    // For example, event.currentTarget is the identifer of the element that caused the event
    divframe = event.currentTarget.affect;
    // If ucdiv generated the event, then event.currentTarget.affect has the value ucdiv.affect
     divframe.style.visibility = "visible";
    // divframe.style.opacity = "1";
    
}

function collegeOut(event) {
    // We can know information about the element that caused the event
    // For example, event.currentTarget is the identifer of the element that caused the event
    divframe = event.currentTarget;
    // If ucdiv generated the event, then event.currentTarget.affect has the value ucdiv.affect
     divframe.style.visibility = "hidden";
    // divframe.style.opacity = "0";
    
}