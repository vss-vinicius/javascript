// Definindo uma função chamada fatorial que recebe um parâmetro 'n'
function fatorial(n) {
    // Inicializando uma variável 'fat' com o valor 1, que será usada para armazenar o resultado do fatorial
    let fat = 1;

    // Iniciando um loop for com a variável de controle 'c' inicializada com o valor de 'n'
    // O loop continua enquanto 'c' for maior que 1 e decrementa 'c' a cada iteração
    for (let c = n; c > 1; c--) {
        // Multiplicando o valor atual de 'fat' pelo valor de 'c' e atribuindo o resultado a 'fat'
        fat *= c;
    }

    // Retornando o resultado final do fatorial armazenado em 'fat'
    return fat;
}

// Chamando a função fatorial com o argumento 5 e exibindo o resultado no console
console.log(fatorial(5));

// 5! = 5 x 4 x 3 x 2 x 1