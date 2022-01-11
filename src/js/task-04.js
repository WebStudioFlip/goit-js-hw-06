let counterValue = 0;
const onBtnCounterClick = function(event) {
    const expr =  event.target.dataset.action;
    switch (expr) {
        case "decrement":
            counterValue -=1;
        break;
        case "increment":
            counterValue +=1;
        break;
    }
   this.parentNode.querySelector("#value").textContent = counterValue;
}

document.querySelector(".btn-counter").parentNode.addEventListener("click", onBtnCounterClick)
