function verificar() {
    // Obter a data atual
    var data = new Date();
    var ano = data.getFullYear();

    // Obter elementos do DOM
    var fano = document.getElementById('txtano');
    var res = document.getElementById('res');

    // Verificar se o ano foi fornecido e é válido
    if (fano.value.length === 0 || parseInt(fano.value) > ano) {
        window.alert('[ERRO] Verifique os dados e tente novamente!');
    } else {
        // Obter o gênero selecionado
        var fsex = document.getElementsByName('radsex');
        var idade = ano - parseInt(fano.value);
        var genero = '';

        // Criar elemento de imagem
        var img = document.createElement('img');
        img.setAttribute('id', 'foto');

        // Determinar o gênero e atribuir a imagem correspondente
        if (fsex[0].checked) {
            genero = 'Homem';
            if (idade >= 0 && idade < 10) {
                img.setAttribute('src', 'images/crianca-m.png');
            } else if (idade < 21) {
                img.setAttribute('src', 'images/jovem-m.png');
            } else if (idade < 50) {
                img.setAttribute('src', 'images/adulto-m.png');
            } else {
                img.setAttribute('src', 'images/idoso-m.png');
            }
        } else if (fsex[1].checked) {
            genero = 'Mulher';
            if (idade >= 0 && idade < 10) {
                img.setAttribute('src', 'images/crianca-f.png');
            } else if (idade < 21) {
                img.setAttribute('src', 'images/jovem-f.png');
            } else if (idade < 50) {
                img.setAttribute('src', 'images/adulta-f.png');
            } else {
                img.setAttribute('src', 'images/idosa-f.png');
            }
        }

        // Atualizar o conteúdo da div 'res'
        res.style.textAlign = 'center';
        res.innerHTML = `Detectamos ${genero} com ${idade} anos.`;
        res.appendChild(img);
    }
}