const maiusculas = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ'
const minusculas = 'abcdefghijklmnopqrstuvwxyz'
const numeros = '0123456789'
const simbolos = '~`!@#$%^&*()_-+={[}]|;"'

const containerSenha = document.getElementById('senha-aleatoria')
const quantiaCaracteres = document.getElementById('quantidade-caracteres')

export { 
    maiusculas, minusculas, numeros, simbolos,
    containerSenha, quantiaCaracteres
}