function displayModal(id) {
  changeModalDisplay(id, "block");
}

function closeModal(id) {
  changeModalDisplay(id, "none");
}

function changeModalDisplay(id, style) {
  var modal = document.getElementById(id);
  modal.style.display = style;
}
