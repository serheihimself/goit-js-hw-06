const listEl = document.getElementById("categories").children.length
console.log("Number of categories:", listEl)

const itemEl = document.querySelectorAll(".item");
const packEl = itemEl[0];
console.log("Category:", packEl.firstElementChild.textContent)
console.log("Elements:", packEl.lastElementChild.children.length)

const boxEl = itemEl[1];
console.log("Category:", boxEl.firstElementChild.textContent)
console.log("Elements:", boxEl.lastElementChild.children.length)

const caseEl = itemEl[2];
console.log("Category:", caseEl.firstElementChild.textContent)
console.log("Elements:", caseEl.lastElementChild.children.length);
