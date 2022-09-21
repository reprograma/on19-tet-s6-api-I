// acessar o objeto
// onde se encontra?
// como acessar?

// exemplo com commonJs ESM
// const listaMusicas = require("./minhas-preferencias.json")

// exemplo com ES6
// import listaMusicas from "./minhas-preferencias.json"

// commonJs ESM
// todos de uma
const preferencias = require("./minhas-preferencias.json")

// aqui acessa um atributo pela chave
preferencias.nome

const favorita = "favorita"

// exemplos errados de propriedade de JSON
// preferencias.cor-favorita
// preferencias.cor favorita

// como acessá-los
preferencias["cor-favorita"]

// aqui acessa um atributo pela propriedade 
preferencias["nome"]

const key = "nome"

preferencias[key]

console.log(`O meu nome é ${preferencias.nome}, minha cor favorita é ${preferencias.cor_favorita} e a minha música favorita é ${preferencias.musica_favorita}.`);


// para imprimir no terminal os autores do item 2
// temos uma lista 

/*
para acessarmos um array, precisamos dos colchetes [] e indicando o indice 
console.log(musicas[0].autor);
console.log(musicas[1].["autor"]);
console.log(musicas[2].autor);

for | arr.forEach
for --> funciona para qualquer ocasião, é a base de tudo.
for valor of arr --> percorre um array e sua variável é o valor
for chave/propriedade in arr --> percorre um array em sua variável
-- ambos podem ser interrompidos

forEach --> percorre um array e seus parâmetros são:
1. o valor
2. o índice
3. arr
*/

const musicas = require("./musicas.json")

musicas.forEach((musica) => {
    console.log(musica.autor)
} )

for (let musica of musicas) {
    console.log(musica.autor)
}

const series = require("./series.json")

series.forEach((serie) => {
    console.log("Título:" + serie.titulo)
    console.log("Dublado:" + serie.dublado)

    for (let personagem of serie.personagens) {
        console.log(personagem)
    }
})

for (let serie of series) {
    console.log("Título " + serie.titulo)
    console.log("Dublado" + serie.dublado)

    console.log(serie.personagens.join("\n"))
}

