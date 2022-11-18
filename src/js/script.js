const containerSenha = document.getElementById('senha-aleatoria')
const quantiaCaracteres = document.getElementById('quantidade-caracteres')
const mudarTema = document.getElementById('mudar-tema')
const mostrarConfiguracoes = document.getElementById('mostrar-configuracoes')

mudarTema.addEventListener('click', () => {
    const tema = document.body
    const temaAtual = document.body.classList

    if(temaAtual == '') 
    mudarTema.innerHTML = `<i class="fa-solid fa-moon"></i>`
    
    if(temaAtual == 'light-mode') 
    mudarTema.innerHTML = `<i class="fa-solid fa-sun"></i>`

    tema.classList.toggle('light-mode')
})

mostrarConfiguracoes.addEventListener('click', () => {
    const tipoDeCaracteres = document.getElementById('tipo-de-caracteres')
    tipoDeCaracteres.classList.toggle('hidden')
})

quantiaCaracteres.addEventListener('change', () => {
    const rangeNumeros = document.getElementById('range-number')

    if(quantiaCaracteres.value < 10) {
        rangeNumeros.innerText = `0${quantiaCaracteres.value}`
    }else {
        rangeNumeros.innerText = quantiaCaracteres.value
    }
    
})

const maiusculas = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ'
const minusculas = 'abcdefghijklmnopqrstuvwxyz'
const numeros = '0123456789'
const simbolos = '~`!@#$%^&*()_-+={[}]|;"'
let length

function gerarSenha() {
    let caracteres = ''

    const configuracoes = document.querySelectorAll('input:checked')

    for(let x = 0; x < configuracoes.length;  x++) {
        if(configuracoes[x].value == 'uppercase') caracteres += maiusculas
        if(configuracoes[x].value == 'lowercase') caracteres += minusculas
        if(configuracoes[x].value == 'numbers') caracteres += numeros
        if(configuracoes[x].value == 'symbols') caracteres += simbolos
    }

    const caracteresLength = caracteres.length
    length = quantiaCaracteres.value

    let password = ''

    for(let x = 0; x < length; x++) {
        let randomNumber = Math.floor(Math.random() * caracteresLength)

        if(caracteres[randomNumber]) {
            password += caracteres[randomNumber]
            containerSenha.value = `${password}`
        }else {
            containerSenha.value = `Selecione uma preferência`
        }
    }
}

function copy() {
    let copyText = containerSenha.value
    let copyNotification = document.getElementById('copy-notification')
    navigator.clipboard.writeText(copyText)

    const icon = document.getElementById('copy-text')
    icon.innerHTML = `<i class="fas fa-check"></i>`

    copyNotification.classList.toggle('hidden')
    setTimeout(() => {
        copyNotification.classList.toggle('hidden')
        icon.innerHTML = `<i class="fa-regular fa-copy"></i>`
    }, 1500)
}
