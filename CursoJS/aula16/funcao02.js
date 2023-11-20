// Definindo uma função chamada 'soma' que recebe dois parâmetros, 'n1' e 'n2', ambos com valores padrão de 0
function soma(n1=0, n2=0) {
    // Retornando a soma dos dois parâmetros 'n1' e 'n2'
    return n1 + n2;
}

// Chamando a função 'soma' com o argumento 7 para 'n1' e usando o valor padrão 0 para 'n2'
// Exibindo o resultado no console
console.log(soma(7));