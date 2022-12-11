function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}
const onBtnClick = document.querySelector(".change-color")
const body = document.querySelector('body')
const spanEl = document.querySelector(".color")

onBtnClick.addEventListener ("click", onEventClick);

function onEventClick (){
  let color = getRandomHexColor();
  body.style.backgroundColor = color;
  spanEl.textContent = color;
}