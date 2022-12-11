const valueBtn = document.querySelector(".counter");
const onBtnClick = document.querySelector('button[data-action="increment"]')
const offBtnClick = document.querySelector('button[data-action="decrement"]')
let onValue = document.querySelector("#value");
let counterValue = 0;

onBtnClick.addEventListener("click", getOnClick)
function getOnClick () {
    counterValue += 1
    onValue.textContent = counterValue;
}
offBtnClick.addEventListener("click", getOffClick)
function getOffClick () {
    counterValue -= 1
    onValue.textContent = counterValue;
}
