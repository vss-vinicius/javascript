// Seleciona os elementos HTML pelo ID e atribui a variáveis
let num = document.querySelector('input#inum')     // Input para inserir números
let lista = document.querySelector('select#ilista') // Lista (select) para exibir valores
let res = document.querySelector('div#res')         // Resultado (div) para exibir informações finais

// Array para armazenar os valores digitados
let valores = []

// Função para verificar se o valor é um número entre 1 e 100
function isNumero(n) {
    if (Number(n) >= 1 && Number(n) <= 100) {
        return true
    } else {
        return false
    }
}

// Função para verificar se o número já está na lista
function inLista(n, l) {
    if (l.indexOf(Number(n)) != -1) {
        return true
    } else {
        return false
    }
}

// Função para adicionar valores à lista
function adicionar() {
    // Verifica se o valor é válido e não está na lista
    if (isNumero(num.value) && !inLista(num.value, valores)) {
        // Adiciona o valor ao array
        valores.push(Number(num.value))
        // Cria um elemento option e o adiciona à lista
        let item = document.createElement('option')
        item.text = `Valor ${num.value} adicionado.`
        lista.appendChild(item)
        // Limpa o resultado
        res.innerHTML = ''
    } else {
        // Exibe um alerta se o valor for inválido ou já estiver na lista
        window.alert('Valor inválido ou já encontrado na lista.')
    }
    // Limpa o input e foca nele para facilitar a entrada do próximo valor
    num.value = ''
    num.focus()
}

// Função para finalizar e exibir estatísticas
function finalizar() {
    if (valores.length == 0) {
        // Se não houver valores, exibe um alerta
        window.alert('Adicione valores antes de finalizar!')
    } else {
        // Inicializa variáveis para estatísticas
        let tot = valores.length
        let maior = valores[0]
        let menor = valores[0]
        let soma = 0
        let media = 0

        // Loop para calcular estatísticas
        for (let pos in valores) {
            soma += valores[pos]; // Adiciona o valor atual ao total da soma

            // Verifica se o valor atual é maior que o valor armazenado na variável 'maior'
            if (valores[pos] > maior)
                maior = valores[pos]; // Se for maior, atualiza o valor de 'maior'

            // Verifica se o valor atual é menor que o valor armazenado na variável 'menor'
            if (valores[pos] < menor)
                menor = valores[pos]; // Se for menor, atualiza o valor de 'menor'
        }

        // Calcula a média
        media = soma / tot

        // Limpa o resultado
        res.innerHTML = ''
        // Exibe as estatísticas no resultado
        res.innerHTML += `<p>Ao todo temos ${tot} números cadastrados.</p>`
        res.innerHTML += `<p>O maior valor informado foi ${maior}.</p>`
        res.innerHTML += `<p>O menor valor informado foi ${menor}.</p>`
        res.innerHTML += `<p>Somando todos os valores, temos ${soma}.</p>`
        res.innerHTML += `<p>A média dos valores digitados é ${media}</p>`
    }
}