import { quantiaCaracteres, containerSenha } from "./variables.js"

import { generatePassword } from "./functions/passwordGenerate.js"
import { copyPassword } from "./functions/copyPassword.js"
import { rangeNumber } from "./functions/rangeNumber.js"
import { mudarTema } from "./functions/changeTheme.js"

const showConfig = document.getElementById('mostrar-configuracoes')

showConfig.addEventListener('click', () => {
    const tipoDeCaracteres = document.getElementById('tipo-de-caracteres')
    tipoDeCaracteres.classList.toggle('hidden')
})

document.getElementById('gerar-senha').addEventListener('click', () => {
    generatePassword(quantiaCaracteres, containerSenha)
})

document.getElementById('copy-text').addEventListener('click', () => copyPassword(containerSenha))