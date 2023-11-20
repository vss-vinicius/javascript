// Definindo uma função chamada 'parimp' que recebe um parâmetro 'n'
function parimp(n) {
    // Verificando se o resto da divisão de 'n' por 2 é igual a 0 (indicando que 'n' é par)
    if (n % 2 == 0) {
        // Se a condição for verdadeira, retornando a string 'par'
        return 'par';
    } else {
        // Se a condição for falsa, retornando a string 'ímpar'
        return 'ímpar';
    }
}

// Chamando a função 'parimp' com o argumento 12 e armazenando o resultado na variável 'res'
let res = parimp(12);

// Exibindo o resultado (conteúdo da variável 'res') no console
console.log(res);