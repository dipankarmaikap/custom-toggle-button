console.log("Hello World!");
var initialState = false;
var toggleContainer = document.getElementById("toggle-container");
var toggleButton = document.getElementById("toggle-button");
var toggleContainerText = document.getElementById("toggle-container-text");
var toggleButtonText = document.getElementById("toggle-button-text");

toggleContainer.addEventListener("click", handelClick);
toggleContainer.addEventListener("keydown", handleKeydown);

function handelClick() {
  initialState = !initialState;
  toggleContainer.classList.toggle("toggle-container-active");
  toggleButton.classList.toggle("toggle-button-active");
  if (initialState) {
    toggleContainerText.innerHTML = "On";
    toggleButtonText.innerHTML = "Off";
    toggleContainer.setAttribute("aria-checked", "true");
  } else {
    toggleContainerText.innerHTML = "Off";
    toggleButtonText.innerHTML = "On";
    toggleContainer.setAttribute("aria-checked", "false");
  }
}

function handleKeydown(event) {
  var flag = false;
  switch (event.keyCode) {
    case 32:
      handelClick();
      flag = true;
      break;
    default:
      break;
  }
  if (flag) {
    event.stopPropagation();
    event.preventDefault();
  }
}
