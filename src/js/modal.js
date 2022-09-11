// Get the modal
const modal = document.querySelector("#modal");

// Get the button that opens the modal
const btn = document.querySelector("#btn");

// When the user clicks the button, open the modal
btn.addEventListener('click', () =>{
  modal.style.display = "flex";
});

// When the user clicks anywhere outside of the modal, close it
window.document.addEventListener('click', function(e) {
  if (e.target === modal) {
    modal.style.display = "none";
  }
});

window.document.addEventListener('keydown', function(e) {
  if (e.key === 'Escape' ) {
    modal.style.display = "none";
  }
});
