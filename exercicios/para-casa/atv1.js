const listaFilmes = require("./filmes.json")

console.log("Títulos:")

listaFilmes.forEach((filme) => {
    console.log("\n" + filme.Title)
})

