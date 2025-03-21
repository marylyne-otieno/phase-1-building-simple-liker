// Defining text characters for the empty and full hearts for you to use later.
// Define the empty and full heart symbols
const EMPTY_HEART = '♡';
const FULL_HEART = '♥';

// Wait for the DOM to fully load
document.addEventListener("DOMContentLoaded", () => {
  // Select the modal and ensure it's hidden initially
  const modal = document.getElementById("modal");
  if (modal) {
    modal.style.display = "none"; // Hide the modal on load
  } else {
    console.error("Modal not found!");
  }

  // Select all like buttons
  const likeButtons = document.querySelectorAll(".like-glyph");

  // Add event listeners to each like button
  likeButtons.forEach(button => {
    button.addEventListener("click", () => {
      // Simulate server call
      mimicServerCall()
        .then(() => {

          if (button.innerText === EMPTY_HEART) {
            button.innerText = FULL_HEART;
            button.style.color = "red";
          } else {
            button.innerText = EMPTY_HEART;
            button.style.color = "";
          }
        })
        .catch(error => {

          modal.style.display = "block";
          document.getElementById("modal-message").innerText = error;


          setTimeout(() => {
            modal.style.display = "none";
          }, 3000);
        });
    });
  });
});


function mimicServerCall(url = "http://mimicServer.example.com", config = {}) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      let isRandomFailure = Math.random() < 0.2;
      if (isRandomFailure) {
        reject("Random server error. Try again.");
      } else {
        resolve("Pretend remote server notified of action!");
      }
    }, 300);
  });
}











