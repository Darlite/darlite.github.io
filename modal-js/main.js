var modal = document.getElementById("single-modal");

var openButton = document.getElementById("open-modal-button");

var closeModal = document.getElementsByClassName("close-modal")[0];

openButton.onclick = function() {
  modal.style.display = "block";
}

closeModal.onclick = function() {
  modal.style.display = "none";
}

window.onclick = function(event) {
  if (event.target == modal) {
    modal.style.display = "none";
  }
}
