function carregar() {
    var msg = document.getElementById('msg')
    var img = document.getElementById('imagem')

    setInterval(function () {
        var data = new Date()
        var hora = data.getHours()
        var minutos = data.getMinutes()
        var segundos = data.getSeconds()

        msg.innerHTML = `Agora são exatamente ${hora}:${minutos}:${segundos}`

        if (hora >= 0 && hora < 12) {
            // Bom dia!
            img.src = 'images/manha.png'
            document.body.style.background = '#e2cd9f'
        } else if (hora >= 12 && hora < 18) {
            // Boa tarde!
            img.src = 'images/tarde.png'
            document.body.style.background = '#b9846f'
        } else {
            // Boa noite!
            img.src = 'images/noite.png'
            document.body.style.background = '#515154'
        }
    }, 1000) // Atualizar a cada segundo
}

carregar() // Chame a função uma vez para configurar a exibição inicial