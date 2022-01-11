function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}

const btnActions = document.querySelector("#controls")

const onBtnActionsClick = function (event) {     
  const quantity = this.parentNode.querySelector("input").value
  this.parentNode.querySelector(".color").textContent = color
  document.querySelector("body").style.backgroundColor = color
}

btnActions.addEventListener("click", onBtnActionsClick)