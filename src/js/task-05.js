const input = document.querySelector("#name-input")
const output = document.querySelector("#name-output")
input.addEventListener("input", onClickInput)
function onClickInput (event){
    return event.currentTarget.value ?
    (output.textContent = event.currentTarget.value) :
    (output.textContent ="Anonymos")

}