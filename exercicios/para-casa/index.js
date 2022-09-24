//exercício 1

console.log("Exercício 1")
const filmes = require("./filmes.json")

       filmes.forEach(filme => {
        console.log(`O titulo do filme: ${filme.Title}`)
    })


console.log(`___________________________________________________`)
    
//exercício 2

console.log("Exercício 2")

let cores = require("./cores-rgb.json");


for(let [cor, rgb] of Object.entries(cores[0]))
console.log(`${cor} - rgb(${rgb.join(" , ")})`)

console.log(`______________________________________________________`)

//exercício 3

console.log("Exercício 3 ainda não concluído")

const estados = require("./cidade-e-estados.json")[0].estados

estados.forEach((estado) => {
    console.log("\nSigla : " + estado.sigla)
    console.log("\nNome : " + estado.nome)
    console.log(estado.cidades.join("\n"))
})

