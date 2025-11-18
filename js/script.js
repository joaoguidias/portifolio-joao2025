
function enviarWhats(event) {
    event.preventDefault()

    const nome = document.getElementById('nome').value        
    const mensagem = document.getElementById('mensagem').value
    const telefone = '5514982305613'

    const texto = `Olá! Me chamo ${nome}, ${mensagem}`
    const msgFormatada = encodeURIComponent(texto)
    const url = `https://whatsa.me/5514982305613/?t=${msgFormatada}`

    window.open(url, '_blank')
}