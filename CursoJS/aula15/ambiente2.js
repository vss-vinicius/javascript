// Declaração de um array chamado 'num' com os valores 5, 8, 2, 9, 3.
let num = [5, 8, 2, 9, 3];

// Adiciona o valor 1 ao final do array.
num.push(1);

// Ordena os elementos do array em ordem crescente.
num.sort();

// Imprime o array ordenado.
console.log(num);

// Imprime o número de posições (ou elementos) no array.
console.log(`O vetor tem ${num.length} posições`);

// Imprime o primeiro valor do array, que agora é o menor valor após a ordenação.
console.log(`O primeiro valor do vetor é ${num[0]}`);

// Procura a posição do valor 8 no array.
let pos = num.indexOf(8);

// Verifica se o valor 8 foi encontrado na posição apropriada.
if (pos == -1) {
    console.log('O valor não foi encontrado!');
} else {
    console.log(`O valor está na posição ${pos}`);
}