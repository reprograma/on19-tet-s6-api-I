// acessar o objeto
// onde se encontra? [x]
// como acesso?

// CommonJS ESM (importar json)

const preferencias = require("./minhas-preferencias.json")

//aqui acessa um atributo pela chave
preferencias.nome

//aqui acessa um atributo pela propriedade
preferencias["nome"] //dá mais poderes na hora de manipular grandes dados

//console.log(`O meu nome é ${preferencias.nome_preferencia}, minha cor favorita é ${preferencias.cor_favorita}, minha música favorita é ${preferencias.musica_favorita}`);

const musicas = require("./musicas.json")
/*console.log(musicas[0].autor);
console.log(musicas[1]["autor"]);
console.log(musicas[2].autor);*/

musicas.forEach((musica) => {//musicas é o array, .forEach é o método, musica é o objeto que contém o valor
    //console.log(/*musica.titulo_musica + ".",*/ musica.autor)
    console.log(musica.autor);
});

const filmes = require("./filmes.json")

/*filmes.forEach((filme) => {
    console.log(filme.titulo_filme + ".", filme.dublado)});*/

filmes.forEach((filme) => {
    console.log("Título: " + filme.titulo_filme);
    console.log("Dublado: " + filme.dublado);
    for (let personagem of filme.atores_principais) {
    console.log(personagem);
    }
});


/*for (let filme of filmes) {
    console.log("Título: " + filme.titulo_filme);
    console.log("Dublado: " + filme.dublado);
    console.log(filme.atores_principais.join("\n"))
}*/

    /*for (let contador=0, contador<atores.atores_principais.length, contador++) {
            console.log(atores.atores_principais[contador]);
        };*/
   
/*for é o coringa e é utilizado para o escopo da função
arr.forEach
 for valor of arr -> percorre um array e sua variável é o valor
 for chave/propriedade in arr -> percorre um array e sua variável é a chave
 Ambos os for podem ser interrompidos

 forEach -> percorre um array e seus parametros são
 1. o valor
 2. indice
 3. arr
*/

//const favorita = "favoirta" ATENTAR à escrita correta
//exemplos errados de propriedade JSON
//preferencias.cor-favorita CURIOSIDADE sobre o uso do hífen ao rodar no terminal 
//preferencias.cor favorita

//como acessa-los
preferencias["cor_favorita"]

const key = "nome"

preferencias[key]

// ES6

//import dados from "./minhas-preferencias.json"