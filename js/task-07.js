const input = document.querySelector("#font-size-control")
const span = document.querySelector ("#text")
input.addEventListener ("input", getEvent) 
function getEvent (event) {
    span.style.fontSize = event.currentTarget.value +"px"
}