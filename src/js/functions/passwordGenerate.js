import { maiusculas, minusculas, numeros, simbolos} from '../variables.js'

let caracteres = ''
let password

function generatePassword(amount, container) {
    verifyConfig()
    generateRandomCaracteres(amount)

    container.value = `${password}`
}

function generateRandomCaracteres(amount) {
    password = ''
    let passwordLength = amount.value
    const caracteresLength = caracteres.length

    for(let x = 0; x < passwordLength; x++) {
        let randomCaractere = Math.floor(Math.random() * caracteresLength)
        password += caracteres[randomCaractere]
    }
}

function verifyConfig() {
    const configuracoes = document.querySelectorAll('input:checked')

    for(let x = 0; x < configuracoes.length;  x++) {
        if(configuracoes[x].value == 'uppercase') caracteres += maiusculas
        if(configuracoes[x].value == 'lowercase') caracteres += minusculas
        if(configuracoes[x].value == 'numbers') caracteres += numeros
        if(configuracoes[x].value == 'symbols') caracteres += simbolos
    }
}

export { generatePassword }