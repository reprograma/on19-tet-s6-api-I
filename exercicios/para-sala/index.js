// acessar o objeto
// onde encontra [x]
// como acesso

// commonjs ESM
const preferencias = require("./minhas-preferencias.json")
// es6
//import batatinha from "./minhas-preferencias.json"
// aqui acessa um atributo pela chave
preferencias.nome
// aqui acessa um atributo pela propriedade
preferencias["nome"]
const key = "nome"
preferencias[key]
// como acessalos
preferencias[" cor_favorita"]
console.log("o meu nome é " + preferencias.nome + "minha cor favorita é " 
+ preferencias.cor_favorita + "minha música favorita é " + preferencias.musica_favorita)
// para imprimir autores
// uma lista de objeto
// desse projeto so imprimir o autor
const musicas = require("./musicas.json")
/*console.log(musicas[0])
console.log(musicas[1])
console.log(musicas[2])*/
// para acessar um array , precisamos do []
/* 
   for -> pau para toda obra
   for valor  of arr -> percorre CADA item array e sua variavel é o array
   for chave/propriedade in arr -> percorre CADA item  array e sua variavel é a chave
    ambos podem ser interrompidos
   for each -> pecorre um array e seu parametros sao
   1- o valor 
   2- o indice 
   3- arr

*/
// for arra.foreach
const musicas = require("./musicas.json")
musicas.forEach((musica) => {
    console.log(musica.autor)
})
for (let musica of musicas) {
    console.log(musica.autor)
}
// imprimir o titulo, dublagem e cada personagens
// percorrer a lista de serie 
// imprimir titulo e a dublagem
// percorrer a lista de personagens 
// imprimir cada um dos personagens 
const series = require("./series-ou-animes.json")
series.forEach((serie) =>{
    console.log("titulo:" + serie.titulo)
    console.log("Dublado:" + serie.dublado)
    for (let personagem of serie.atores){
        console.log(personagem)
    }
})