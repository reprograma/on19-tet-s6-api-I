// acessar o objeto
// aonde se encontra? [x]
// como acesso?

// commonJs ESM


const preferencias = require("./minhas-preferencias.json")

//aqui acessa um atributo pela chave
preferencias.nome

// exemplos errados de propriedade de JSON
// preferencias.cor-favorita
// pereferncias.cor favorita

// como acessa-los
preferencias["cor_favorita"]

// aqui acessa um atributo pela propriedade

// todos de uma vez
const preferencias = require("./minhas-preferencias.json")

// aqui acessa um atributo pela chave
preferencias.nome

// exemplos errados de propriedade de JSON
//preferencias.cor-favorita
//preferencias.cor favorita

// como acessa-los
preferencias["cor-favorita"]

// aqui acessa um atruto pela propriedade

preferencias["nome"]

const key = "nome"
preferencias[key]


console.log("o meu nome é " + preferencias.nome + 
", minha cor favorita é " + preferencias.cor_favorita + 
", minha musica favorita é " + preferencias.musica_favorita)

const cor = preferencias.cor_favorita

console.log("O meu nome é " + preferencias.nome 
+ ", minha cor favorita é " + preferencias.cor_favorita 
+ ", minha musica favorita é " + preferencias.musica_favorita)

console.log(`O meu nome é ${preferencias.nome}, minha cor favorita é ${cor}, minha musica favorita é ${preferencias.musica_favorita}`)


// para imprimir no terminal os autores do item 2
// temos uma lista objeto de objeto
// desse objeto imprir o autor



/**
 * para acessar-mos um array, prescisamos do conchetes[] e indicando o indice
 

console.log(musicas[0].autor)
console.log(musicas[1]["autor"])
console.log(musicas[2].autor)

for  arr.forEach
for -> pau para toda obra
for valor of arr -> percorre CADA item do array e sua variavel é o valor
for chave/propriedade in arr -> percorre CADA item do array e sua variavel é a chave
ambos os for podem ser interrompidos

forEach -> percorre um array e seus parametros sao 
 1. o valor
 2. indice
 3. arr

*/
const musicas = require("./musicas.json")

musicas.forEach((musica) => {

console.log(musica.autor)

})


for (let musica of musicas) {

  console.log(musica.autor)
}

// imprir o titulo, dublagem e cada personagens

// percorrer a lista de serie
// imprime o titulo e dublagem
// percorrer a lista de personagens
// imprime cada um dos personagens

const series = require("./series-ou-animes.json")

series.forEach((serie) => {

  console.log("Titulo: " + serie.titulo)
  console.log("Dublado: "+ serie.dublado)

  for (let personagem of serie.personagens) {
    console.log(personagem)
  }
})

for (let serie of series) {
  console.log("Titulo: " + serie.titulo)
  console.log("Dublado: "+ serie.dublado)

  console.log(serie.personagens.join("\n"))
}

