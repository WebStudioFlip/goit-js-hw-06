function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}

const btnChangeColor = document.querySelector(".change-color")


const onBtnChangeColorClick = function (event) {   
  const color = getRandomHexColor()
  this.parentNode.querySelector(".color").textContent = color
  document.querySelector("body").style.backgroundColor = color
}

btnChangeColor.addEventListener("click", onBtnChangeColorClick)
