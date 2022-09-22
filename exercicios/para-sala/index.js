<<<<<<< HEAD
//acessar o objeto, para isso é importante saber:
//onde se encontra e como consigo acessar esse documento.

//commonJs ESM - vc importa atribuindo o nome da variavel.

//para puxar o documento json, primeiro é preciso criar um index.js, e agora vc precisa puxar o documento json para cá do seguinte modo:

const favoritos = require("./minhas preferencias.json")
// se for o json é obrigado colocar a terminação. ou seja, isso é importar.

//a const é para saber que o que for importado não vai mudar, o nome da const e o =
//para acessar um json tem duas formas: 
    //1- vc copia o nome do objeto, ou seja, o nome da const e coloca o.que quer buscar, nesse caso tem o nome;
    favoritos.nome
    // 2- ou vc coloca preferencias["nome"]. essa opção permite que possa acessar da forma: const key = "nome", e abaixo coloca preferencias[key]
            //essa segunda opção é importante para fazer quando se tem um documento muit extenso.
    favoritos["nome"]

//aqui é para imprimir a mensagem no terminal:
console.log("O meu nome é " + favoritos.nome + " minha cor favorita é " + 
favoritos.cor_favorita + " minha música favorita é " + favoritos.musica_favorita)

//segundo modelo para imprimir:
console.log(`O meu nome é ${favoritos.nome}, minha cor favorita é ${favoritos.cor_favorita}, minha música favorita é ${favoritos.musica_favorita}`)


//para imprimir os autores do item 2 no temrinal
// pra fazer é preciso chamar a array pela posição do item desejado. para isso solicita um por um:
const musicas = require("./musicas.json")

console.log(musicas[0].Autor)
console.log(musicas[1].Autor)
console.log(musicas[2].Autor) //fazendo assim você consegue acessar o autor e o titulo da música (sem colocar o ".Autor"). se colocar o ".Autor" vai selecionar só o autor do documento.
//essa é uma forma de acessar uma lista pequena, para acessar uma lista enorme é necessario outra formula.

//para acessar listas grandes usa for ou arr.forEach:
//para o for, ele compartilha o escopo da função. ex: para pesquisa é melhor utilizar o for porque com ele pode interromper a  pesquisa em uma determinado local. o for.Each mostra tudo.
// o "for valor of arr" vai percorrer um array e sua variavel é o valor;
// o for chave/propriedade in arr vai percorrer um array e sua variavel é a chave;
//o forEach vair percorrer um array e seus parametros são, o objeto/valor, o indice e o próprio array.

//const musicas = require("./musicas.json")
//o forEach indica que estamos pedindo o autor de cada musica, de cada item.
musicas.forEach ((musica) => { //musica aqui é um objeto. vc determina o objeto e depois chama.
//aqui coloca musica no singular porque vc quer uma musica por vez, um autor por vez.
    console.log(musica.Autor)
})

//segundo meio de imprimir as musicas utilizando o for:
//for (let musica of musica) {
   // console.log(musica.autor)
//}

//agora para chamar o series ou animes: para imprimir o titulo, se é dublado e os personagens:
// primeiro percorre a lista de serie, depois a de personagens
    //depois de percorrer é preciso imprimir cada uma das listas.

const series = require("./series-ou-animes.json") //aqui é importado o documento.

series.forEach((serie) => {
    console.log("Titulo: " + serie.titulo)
    console.log("Dublado: " + serie.dublado)

    //agora para chamar os personagens é preciso chamar a lista, já que eles estão dentro de uma.
    //dentro de uma função pode se usar o for ou o forEach, nesse caso para puxar os personagens.
    // fazendo a função para chamar:
for (let personagem of serie.personagens) {
    console.log(personagem)
}
})

//segunda opção para imprimir:
for (let serie of series) {
    console.log("Titulo: " + serie.titulo)
    console.log("Dublado: " + serie.dublado)

    console.log(serie.personagens.join("\n"))
}
=======
// acessar o objeto
// aonde se encontra? [x]
// como acesso?

// commonJs ESM

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



>>>>>>> 3a4d7817be1a9cd5eeccd95e0b9e7328a9df9cb1
