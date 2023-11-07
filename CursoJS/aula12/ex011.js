// Definindo a variável "idade" com o valor 64.
var idade = 25;

// Exibindo a idade no console.
console.log(`Você tem ${idade} anos.`);

// Início da estrutura condicional para determinar o status de voto.
if (idade < 16) {
    // Se a idade for menor que 16, a pessoa não vota.
    console.log('Não vota');
} else if (idade < 18 || idade > 65) {
    // Se a idade estiver entre 16 (inclusive) e 18 (exclusive) ou for maior que 65, o voto é opcional.
    console.log('Voto opcional');
} else {
    // Se a idade não se encaixar em nenhuma das condições anteriores, o voto é obrigatório.
    console.log('Voto obrigatório');
}

/* Neste código, você está definindo a variável "idade" com o valor 64 e, em seguida, usando uma estrutura condicional para determinar o status de voto com base na idade. Os comentários explicam cada parte do código e as condições para determinar se a pessoa deve votar ou se o voto é opcional ou obrigatório com base na idade. */