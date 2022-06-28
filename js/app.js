let numero = 0

let barraContadora = document.getElementById("barra-contadora")
barraContadora.textContent = numero

let btnRestar = document.getElementById("btn-restar")
let btnSumar = document.getElementById("btn-sumar")


btnRestar.addEventListener("click", ()=> Restar() )
btnSumar.addEventListener("click", ()=> Sumar())



function Sumar() {
    numero++
    barraContadora.textContent = numero

}

function Restar() {
    numero--
    barraContadora.textContent = numero
}