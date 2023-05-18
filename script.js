/***** 


let checkboxes = document.querySelectorAll('input[type="checkbox"]');
let lastChecked = null;

function handleCheck(e) {
  if (
    lastChecked &&
    this.classList.contains(lastChecked.className) &&
    this !== lastChecked
  ) {
    lastChecked.checked = false;
  }
  lastChecked = this;
}

checkboxes.forEach((checkbox) => {
  checkbox.addEventListener("click", handleCheck);
});
/***** */

function checkTheBoxes() {
  const checked = document.querySelectorAll("input[type = 'checkbox']:checked");
  return checked.length === 3;
}
let lastBox;
document.body.addEventListener("change", (event) => {
  if (checkTheBoxes() === true) {
    lastBox.checked = false;
  }
  lastBox = event.target;
});
