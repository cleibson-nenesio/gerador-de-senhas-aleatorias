import { quantiaCaracteres } from "../variables.js"

const rangeNumber = quantiaCaracteres.addEventListener('change', () => {
    const rangeNumeros = document.getElementById('range-number')
    quantiaCaracteres.value < 10 ? rangeNumeros.innerText = `0${quantiaCaracteres.value}` : rangeNumeros.innerText = quantiaCaracteres.value
})

export { rangeNumber }