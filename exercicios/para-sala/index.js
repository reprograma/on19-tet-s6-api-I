// acessar o objetoo
// aonde se encontra?
// como acesso?

//comonJs ESM

const preferencias = require("./minhas-preferencias.json")

// aqui acessa um atributo pela chave
preferencias.nome

//exemplos errados de propriedades de JSON
// preferencias.cor-favorita
// preferencias.cor favorita

// como acessa-los
preferencias["cor-favorita"]

// aqui acessa um atributo pela propriedade
preferencias["nome"]

const key = "nome"
preferencias[key]

console.log("O meu nome  é " + preferencias.nome 
+ ", minha cor favorita é " + preferencias.cor_favorita
+ ", minha musica favorita é " + preferencias.musica_favorita)

console.log(`O meu nome é ${preferencias.nome}, minha cor favorita é ${preferencias.cor_favorita}, minha musica favorita é ${preferencias.musica_favorita}`)

// para imprimir no terminal os autores do item 2
// temos uma lista objeto de objeto
// desse objeto imprimir o autor


/**
 * para acessarmos um array, precisamos de cochetes

console.log(musicas[0].autor)
console.log(musicas[1].autor)
console.log(musicas[2].autor)

for arr.forEach
for -> pau para toda obra 
for of arr-> pecorre cada item do array e sua variavel é o valor

for chave/propriedade in arr -> pecorre um array e sua variavel é a chave
ambos oos for podem ser interrompidos 

forEach _. pecorre cada item do array e seus parametros são
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

//imprimir o titulo, dublagem e cada personagens

// percorrer a lista de serie
//imprime o titulo e dublagem
// percorrer a lista de persoangens
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
