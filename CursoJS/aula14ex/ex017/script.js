// Função para gerar a tabuada com base no número inserido pelo usuário
function tabuada() {
    // Obtém o elemento de entrada de número e o elemento de seleção da tabuada
    let num = document.getElementById('inum')
    let tab = document.getElementById('seltab')

    // Verifica se o campo de número está vazio
    if (num.value.length == 0) {
        window.alert('Por favor, digite um número!')
    } else {
        // Converte o valor do campo de número para um número inteiro
        let n = Number(num.value)
        // Inicializa a variável de controle
        let c = 1

        // Limpa o conteúdo atual do elemento de seleção
        tab.innerHTML = ''

        // Loop para gerar a tabuada até o décimo valor
        while (c <= 10) {
            // Cria um elemento de opção para cada linha da tabuada
            let item = document.createElement('option')

            // Define o texto e o valor do item da opção
            item.text = `${n} x ${c} = ${n * c}`
            item.value = `tab${c}`

            // Adiciona o item ao elemento de seleção
            tab.appendChild(item)

            // Incrementa a variável de controle
            c++
        }
    }
}