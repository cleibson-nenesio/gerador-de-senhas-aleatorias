const copyConfirmation = 1500

function copyPassword(container) {
    const icon = document.getElementById('copy-text')
    
    if(container.value == 'Selecione uma configuração' || container.value == ''){
        icon.innerHTML = `<i class="fas fa-times"></i>`
        setTimeout(() => {
            icon.innerHTML = `<i class="fa-regular fa-copy"></i>`
        }, copyConfirmation)
        return
    } 

    navigator.clipboard.writeText(container.value)
    icon.innerHTML = `<i class="fas fa-check"></i>`
    setTimeout(() => {
        icon.innerHTML = `<i class="fa-regular fa-copy"></i>`
    }, copyConfirmation)
}

export { copyPassword }