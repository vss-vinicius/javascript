// Criando um objeto chamado 'amigo' com propriedades como nome, sexo e peso
let amigo = {
    nome: 'José',
    sexo: 'M',
    peso: 85.4,

    // Adicionando um método chamado 'engordar' ao objeto 'amigo'
    engordar(p = 0) {
        // Exibindo uma mensagem no console quando o método é chamado
        console.log('Engordou')

        // Atualizando o peso do amigo com o valor passado como parâmetro (padrão é 0 se não for fornecido)
        this.peso += p
    }
}

// Chamando o método 'engordar' do objeto 'amigo' com um aumento de peso de 2
amigo.engordar(2)

// Exibindo no console uma mensagem contendo o nome e o peso atualizado do amigo
console.log(`${amigo.nome} pesa ${amigo.peso} Kg`)