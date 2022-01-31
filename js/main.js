// JavaSript file for html modal

// Create variables connecting to the DOM in html
let modal = document.getElementById("bioModal");
let modalBtn = document.getElementById("bioBtn");
let exit = document.getElementsByClassName("close");

// Create a function opening the modal when users clicks the "Short Bio" button
modalBtn.onclick = function() {
    modal.style.display = "block";
}

// Create a function closing the modal when the user clicks the "X" in the modal window
exit.onclick = function() {
    modal.style.display = "none";
}

// Create a function closing the modal when the user click outside of the modal window
window.onclick = function(event) {
    if (event.target !== modal) {
        modal.style.display = "none";
    }
}

// Create a function closing the modal when the user clicks the "Escape" key
window.addEventListener("keydown", function(event) {
    if (event.key === "Escape") {
        modal.style.display = "none";
    }
})