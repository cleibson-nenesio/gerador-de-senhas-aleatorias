import { containerSenha } from "../variables.js"

const copyConfirmation = 1500

function copyPassword() {
    navigator.clipboard.writeText(containerSenha.value)

    const icon = document.getElementById('copy-text')
    icon.innerHTML = `<i class="fas fa-check"></i>`

    setTimeout(() => {
        icon.innerHTML = `<i class="fa-regular fa-copy"></i>`
    }, copyConfirmation)
}

export { copyPassword }