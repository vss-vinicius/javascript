// Cria um array chamado 'valores' com os valores 8, 1, 7, 4, 2, 9.
let valores = [8, 1, 7, 4, 2, 9];

//console.log(valores)

/*
console.log(valores[0])
console.log(valores[1])
console.log(valores[2])
console.log(valores[3])
console.log(valores[4])
console.log(valores[5])
*/

// Loop for que percorre cada posição do array 'valores'.
// A variável 'pos' representa a posição atual no array.
for (let pos = 0; pos < valores.length; pos++) {
    // Imprime no console a mensagem indicando a posição e o valor correspondente.
    console.log(`A posição ${pos} tem o valor ${valores[pos]}`);
}