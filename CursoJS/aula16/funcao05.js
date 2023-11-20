// Recursividade

// Definindo uma função chamada 'fatorial' que calcula o fatorial de um número 'n'
function fatorial(n) {
    // Verificando se 'n' é igual a 1, caso em que o fatorial é 1
    if (n == 1) {
        // Se a condição for verdadeira, retornando 1
        return 1;
    } else {
        // Se a condição for falsa, calculando o fatorial de 'n' multiplicado pelo fatorial de 'n - 1' de forma recursiva
        return n * fatorial(n - 1);
    }
}

// Chamando a função 'fatorial' com o argumento 5 e exibindo o resultado no console
console.log(fatorial(5));

/*
    5! = 5 x 4 x 3 x 2 x 1
    5! = 5 x 4!

    n! = n x (n-1)!
    1! = 1
*/