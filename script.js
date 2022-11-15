const divSenha = document.getElementById('senha-aleatoria')
let quantiaCaracteres

setInterval(() => {
    const rangeNumeros = document.getElementById('range-number')
    quantiaCaracteres = document.getElementById('quantidade-caracteres').value
    rangeNumeros.innerText = quantiaCaracteres
}, 100)

const caracteresUppercase = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ'
const caracteresLowercase = 'abcdefghijklmnopqrstuvwxyz'
const number = '0123456789'
const symbols = '@*!#?%&$()'
let length

function gerarSenha() {
    let caracteres = ''

    for(let x = 0; x < 4; x++) {
        let checkRequirements = document.querySelectorAll('.config:checked')[x]

        if(checkRequirements){
            if(checkRequirements.value == 'caracteresUppercase') {
                caracteres += caracteresUppercase
            }

            if(checkRequirements.value == 'caracteresLowercase') {
                caracteres += caracteresLowercase
            }

            if(checkRequirements.value == 'number') {
                caracteres += number
            }

            if(checkRequirements.value == 'symbols') {
                caracteres += symbols
            }
        }
        
    }

    let password = ''

    const caracteresLength = caracteres.length
    length = quantiaCaracteres


    for(let x = 0; x < length; x++) {
        let randomNumber = Math.floor(Math.random() * caracteresLength)

        if(caracteres[randomNumber]) {
            password += caracteres[randomNumber]
            divSenha.innerHTML = `${password}`
        }else {
            divSenha.innerHTML = `<p>Selecione uma preferência</p>`
        }
    }
}

gerarSenha()