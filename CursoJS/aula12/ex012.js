// Obtém a data e a hora atuais do sistema
var agora = new Date()

// Extrai a hora da data atual
var hora = agora.getHours()

// Extrai os minutos da data atual
var minutos = agora.getMinutes()

// Exibe a hora e os minutos formatados
console.log(`Agora são exatamente ${hora}:${minutos}.`)

// Determina a saudação com base na hora
if (hora <= 5) {
    console.log('Boa Madrugada!')
} else if (hora < 12) {
    console.log('Bom Dia!')
} else if (hora <= 18) {
    console.log('Boa Tarde!')
} else if (hora > 18) {
    console.log('Boa Noite!')
}