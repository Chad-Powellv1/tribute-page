// Create variables connecting to the DOM in html
let modalView = document.getElementById("bioModal");
let modalBtn = document.getElementById("bioBtn");
let modalExit = document.getElementsByClassName("bioClose")[0];

/* Create a function opening the modal when users clicks the "Short Bio" button,
   followed by a corresponding event listener calling the function when clicked */
let openModal = () => (modalView.style.display = "block");
modalBtn.addEventListener("click", openModal);

// Create a function to close the modal
let closeModal = () => modalView.style.display = "none";

// Create event listener to close modal when user clicks "X" in modal
modalExit.addEventListener("click", closeModal);

// Create a function closing the modal when the user clicks the "Escape" key
window.addEventListener("keydown", function(event) {
    if (event.key === "Escape") {
        closeModal();
    }
});