const onNameBlur = function (event) {   
    
    if (event.currentTarget.dataset.length===event.currentTarget.value.length) {
        event.currentTarget.classList.add("valid")
        event.currentTarget.classList.remove("invalid")
        return
    }

    event.currentTarget.classList.add("invalid")
    event.currentTarget.classList.remove("valid")
    
    
}

document.querySelector("#validation-input").addEventListener("blur", onNameBlur)