// acessar o objeto
//onde se encontra
//como acessar?

// commonJs ESM 

// todos de uma vez
const preferencias  = require("./minhas-preferencias.json")

// ES6
//exdemplo de ES6  import batatinha from "./minhas-preferencias.json";

//acessa atributo pela chave
preferencias.nome

//exemplos errados de propriedade de JSON

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
//preferencias["corFavorita"]

//acessa um atributo pela propriedade
//preferencias["nome"]

const key = "nome"
preferencias[key]

const cor = preferencias.corFavorita

console.log("O meu nome é " + preferencias.nome 
+ ", a minha cor favorita é " + preferencias.corFavorita
+ ", a minha musica favorita é " + preferencias.musicaFavorita)

// outra forma
console.log(`O meu nome é ${preferencias.nome}, e a minha cor favorita é ${preferencias.corFavorita}, e a minha música favorita é ${preferencias.musicaFavorita}`)

const musicas = require("./musicas.json")

console.log(musicas[0].autor)
console.log(musicas[1].autor)
console.log(musicas[4].autor)

musicas.forEach((musica) => {

    console.log(musica.autor)


})

//outra forma de fazer
for (let musica of musicas){

    console.log(musica.autor)
}

const series = require("./series-ou-animes.json")

series.forEach((serie) => { 

    console.log("Titulo: " + serie.titulo)
    console.log("Dublado?: " + serie.dublado)
    
    for (let personagem of serie.personagens){
        console.log(personagem)

        // outra forma de fazer 
        //console.log(serie.personagens.join("\n"))

    }
    

})
