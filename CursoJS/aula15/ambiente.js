// Cria um array chamado 'num' com os valores 5, 8, 2, 9, 3.
let num = [5, 8, 2, 9, 3];

// Ordena o array 'num' lexicograficamente (como strings), pois 'sort' converte os elementos em strings por padrão.
num.sort();

// Adiciona o valor 1 ao final do array 'num'.
num.push(1);

// Imprime o array 'num' no console.
console.log(num);

// Imprime a quantidade de elementos no array 'num' usando a propriedade 'length'.
console.log(`O vetor tem ${num.length} posições`);

// Imprime o primeiro valor do array 'num', que agora está ordenado.
console.log(`O primeiro valor do vetor é ${num[0]}`);