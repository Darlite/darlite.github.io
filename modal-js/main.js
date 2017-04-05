function changeModalDisplay(id, t) {
  var modal = document.getElementById(id);
  if (t.id == 'open-modal-button') {
    modal.style.display = "block";
  } else {
    modal.style.display = "none";
  }
}
