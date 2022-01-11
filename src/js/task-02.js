const ingredients = [
  'Potatoes',
  'Mushrooms',
  'Garlic',
  'Tomatos',
  'Herbs',
  'Condiments',
];
const ingredientsItems = []
ingredients.forEach(el => {  
  const ingredient = document.createElement("li")
  ingredient.textContent = el
  ingredient.classList.add("item")
ingredientsItems.push(ingredient)
  
})

const ingredientsEl = document.querySelector("#ingredients")

ingredientsEl.append(...ingredientsItems)
