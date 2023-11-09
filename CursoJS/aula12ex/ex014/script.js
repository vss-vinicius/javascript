function carregar() {
    var msg = document.getElementById('msg')
    var img = document.getElementById('imagem')

    var data = new Date()
    var hora = data.getHours()
    var minutos = data.getMinutes()
    var segundos = data.getSeconds()

    msg.innerHTML = `Agora são exatamente ${hora}:${minutos}:${segundos}`

    if (hora >= 0 && hora < 12) {
        // Bom dia!
    } else if (hora >= 12 && hora < 18) {
        // Boa tarde!
    } else {
        // Boa noite!
    }
}