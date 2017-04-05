function displayModal(id) {
  var modal = getElement(id)
  modal.style.display = "block";
}

function closeModal(id) {
  var modal = getElement(id);
  modal.style.display = "none";
}

function getElement(id) {
  return document.getElementById(id);
}
