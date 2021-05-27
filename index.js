//Declaramos las 2 variables con los numeros fijos, y tomamos el html para que se visualice
let num1 = 8
let num2 = 2
document.getElementById("num1-el").textContent = num1
document.getElementById("num2-el").textContent = num2

//Declaramos tercera variable para que muestre el resultado
let resEl = document.getElementById("res-el")

//Funciones de calculos
function suma() {
    let resultado = num1 + num2
    resEl.textContent = "Sum: " + resultado
}

function resta() {
    let resultado = num1 - num2
    resEl.textContent = "Sum: " + resultado
}

function division() {
    let resultado = num1 / num2
    resEl.textContent = "Sum: " + resultado
}

function multiplicacion() {
    let resultado = num1 * num2
    resEl.textContent = "Sum: " + resultado
}

