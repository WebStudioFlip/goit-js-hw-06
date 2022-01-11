const onSizeInput = function (event) {       
    event.currentTarget.parentNode.querySelector("#text").style.fontSize = event.currentTarget.value + "px"    
}
document.querySelector("#font-size-control").parentNode.querySelector("#text").style.fontSize = document.querySelector("#font-size-control").value + "px" 
document.querySelector("#font-size-control").addEventListener("input", onSizeInput)