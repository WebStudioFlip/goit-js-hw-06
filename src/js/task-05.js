const onNameInput = function (event) {
    console.log(event.currentTarget.value.length>0)
    if (event.currentTarget.value.length>0) {
        event.currentTarget.parentNode.querySelector("#name-output").textContent = event.currentTarget.value
        return
    }
    event.currentTarget.parentNode.querySelector("#name-output").textContent = "Anonymous"
}
document.querySelector("#name-input").addEventListener("input", onNameInput)