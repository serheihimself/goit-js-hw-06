const ingredients = [
  'Potatoes',
  'Mushrooms',
  'Garlic',
  'Tomatos',
  'Herbs',
  'Condiments',
];
const list = document.querySelector("#ingredients")

const markup = ingredients.map((ingredient)=>`<li class="list-item">${ingredient}</li>`)
.join("");
console.log(markup)
list.innerHTML = markup;