const divSenha = document.getElementById('senha-aleatoria')
const icon = document.getElementById('copy-text')
const theme = document.body
const switchThemeDot = document.querySelectorAll('.slider')[0]

function changeTheme() {
    switchThemeDot.classList.toggle('active')
    theme.classList.toggle('light-mode')
}

let quantiaCaracteres

setInterval(() => {
    const rangeNumeros = document.getElementById('range-number')
    quantiaCaracteres = document.getElementById('quantidade-caracteres').value
    rangeNumeros.innerText = quantiaCaracteres
}, 100)

const caracteresUppercase = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ'
const caracteresLowercase = 'abcdefghijklmnopqrstuvwxyz'
const number = '0123456789'
const symbols = '~`!@#$%^&*()_-+={[}]|;"'
let length

function gerarSenha() {
    icon.innerHTML = `<i class="fa-regular fa-copy"></i>`

    let caracteres = ''

    for(let x = 0; x < 4; x++) {
        let checkRequirements = document.querySelectorAll('.config-caractere:checked')[x]

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
            divSenha.value = `${password}`
        }else {
            divSenha.value = `Selecione uma preferência`
        }
    }
}

function copy() {
    let copyText = divSenha.value
    let copyNotification = document.getElementById('copy-notification')
    navigator.clipboard.writeText(copyText)

    copyNotification.classList.toggle('hidden')

    setTimeout(() => {
        copyNotification.classList.toggle('hidden')
    }, 1500)

    icon.innerHTML = `<i class="fas fa-check"></i>`
}

gerarSenha()