function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}

const btnActions = document.querySelector("#controls");

const input = document.querySelector("input");

const createBoxes = function (amount) {
  const num = Number.parseInt(amount);
  let boxes = [];
  for (let index = 0; index < num; index++) {
    let box = document.createElement("div");
    box.style.width = 30 + index * 10 + "px";
    box.style.height = 30 + index * 10 + "px";
    box.style.margin = "10px";
    box.style.backgroundColor = getRandomHexColor();
    console.dir(box);
    boxes.push(box);
  }
  document.querySelector("#boxes").append(...boxes);
  document.querySelector("#boxes").style.displey;
};

const destroyBoxes = function () {
  const boxes = [...document.querySelector("#boxes").children];
  boxes.forEach((el) => {
    console.log(el);
    el.remove();
  });
};

const onBtnActionsClick = function (event) {
  destroyBoxes();
  console.log(event);
  const action = event.target.dataset.action;
  if (action === "create") {
    if (input.value > 0) {
      createBoxes(input.value);
    } else {
      alert("Введите количество боксов!");
    }
  }   
      
  
};

btnActions.addEventListener("click", onBtnActionsClick);
