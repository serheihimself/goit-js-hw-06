const ingredients = ['Potatoes', 'Mushrooms', 'Garlic', 'Tomatos', 'Herbs', 'Condiments'];
const list = document.querySelector("#ingredients")
const markup = [];
ingredients.forEach(ingredient=> {
  const itemList = document.createElement("li")
  itemList.className = "item"
  itemList.textContent = ingredient
  markup.push(itemList)
})
list.append(...markup)