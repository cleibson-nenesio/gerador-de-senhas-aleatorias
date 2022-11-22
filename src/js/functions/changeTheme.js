const mudarTema = document.getElementById('mudar-tema')

mudarTema.addEventListener('click', () => {
    const tema = document.body
    const temaAtual = document.body.classList

    temaAtual == '' ? mudarTema.innerHTML = `<i class="fa-solid fa-moon"></i>` : mudarTema.innerHTML = `<i class="fa-solid fa-sun"></i>`

    tema.classList.toggle('light-mode')
})

export { mudarTema }