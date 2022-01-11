const listEl = document.querySelector("#categories")
const listItemsEl = listEl.querySelectorAll(".item")
console.log(`Number of categories: ${listItemsEl.length}`)
listItemsEl.forEach(el=>{   
    console.log(`Category: ${el.querySelector("h2").textContent}`)
    console.log(`Elements: ${el.querySelectorAll("li").length}`)    
})