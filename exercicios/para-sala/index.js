//acessar o objeto
//onde se encontra
//como acesso

//commonJs ESM

const preferidas = require("./minhas-preferencias.json")

//acessa o atributo pela chave
preferidas.nome

const favorita = "favorita"

//exemplos errados de propriedade Json
// preferencias.cor-favorita
//preferencias.cor favorita

preferidas["cor favorita"]

// aqui acessa o atributo pela propriedade
preferidas["nome"]

const key = "nome"
preferidas [key]
console.log("O meu nome é " + preferidas.nome + " ,Minha cor favorita é " + preferidas.cor_favorita + " ,Minha música favorita é " + preferidas.musica_favorita)

//ou assim

console.log(`Meu nome é ${ preferidas.nome},minha cor favorita é ${ preferidas.cor_favorita}, e minha música favorita é ${preferidas.musica_favorita}`)

//acessar o array
//para acessar um array usamos colchetes e indicando o indice

/**
 * para acessar-mos um array, prescisamos do colchetes[] e indicando o indice
 

console.log(musicas[0].autor)
console.log(musicas[1]["autor"])
console.log(musicas[2].autor)

for  arr.forEach
for -> pau para toda obra
for valor of arr -> percorre um array e sua variavel é o valor
for chave/propriedade in arr -> percorre um array e sua variavel é a chave
ambos os for podem ser interrompidos

forEach -> percorre um array e seus parametros sao 
 1. o valor
 2. indice
 3. arr

*/


const musicas = require("./musicas.json")

console.log(musicas[0].autor)
console.log(musicas[1]["autor"])
console.log(musicas[2].autor)

musicas.forEach((musica) => {
    console.log(musica.autor)


    //esse é igual ao de cima faz as mesma funções
})
for (let musica of musicas){
    console.log(musica.autor)

}




//imprimir titulo,personagens e se é dublado
//precisa percorrer a lista de séries e a lista de personagens
//imprime titulo e dublabem
//imprimir cada um dos personagens


const series = require("./minhas-series.json")

series.forEach((serie) => {
    console.log("Titulo" +serie.titulo)
    console.log("dublado" +serie.dublado)

    for(let personagem of serie.personagens) {
        console.log(personagem)

   
}
})

