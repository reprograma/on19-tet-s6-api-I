// acessar o objeto
// aonde se encontra
// como acesso?

//commonJs ESM

const preferencias = require("./minhas-preferencias.json")

// aqui acessa um atributo pela chave
preferencias.nome 

// aqui acessa um atributo pela propriedade
preferencias["nome"] 
const key = "nome"
preferencias[key]

console.log(`O meu nome é ${preferencias.nome}, minha cor favorita é ${preferencias.cor_favorita}, minha música favorita é ${preferencias.musica_favorita}`)

//Imprimir no terminal Os meus atores favoritos do item 2
// temos uma lista de objetos 
// desses objetos, vamos imprimir apenas o autor

const musicas = require("./musicas.json")

/** para acessarmos um array, precisamos dos conchetes[] e indicando o indice
console.log(musicas[0].autor)
console.log(musicas[1].autor)
console.log(musicas[2].autor)
 */

  /**
for -> pau para toda obra
 for of -> percorre um array e sua variável é o valor (exemplo: for valor of array)
 for in -> percorre uma array e sua variável é a chave (exemplo: for chave/propriedade in array)
 ambos os for podem ser interrompidos a qualquer momento

 forEach -> percorre um array e seus parâmetros são:
 1. valor
 2. indice
 3. array
 O forEach não é possível interromper 
 */

/**
// Podemos acessar também utilizando o forEach
musicas.forEach((musica) => {
    console.log(musica.autor)
})
 */

// Podemos acessar também utilizando o for of (exemplo: for valor of array)
for (let musica of musicas) {
    console.log(musica.autor)
}

//imprimir o titulo, dublagem e cada personagem
//percorrer a lista de serie
//imprimir o titulo e dublagem
// percorrer a lista de personagens
// imprimir cada um dos personagens

const series = require("./series-ou-animes.json")

//Forma 1 de fazer isso:
series.forEach((serie) => {
    console.log(`Titulo: ${serie.titulo}`)
    console.log(`Dublagem: ${serie.dublado}`)

    for (let personagem of serie.personagens) {
        console.log(`Personagem: ${personagem}`)
    }
})

//Forma 2 de fazer isso:
for (let serie of series) {
    console.log(`Titulo: ${serie.titulo}`)
    console.log(`Dublagem: ${serie.dublado}`)

    console.log(`Personagens: ${serie.personagens.join("\n")}`)
}