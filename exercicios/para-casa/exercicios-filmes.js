//1. - [ ] Imprimir no terminal os titulos da lista de filme que está no arquivo filmes.js, contendo a seguinte mensagem: `O titulo do filme: ` titulo. Entre cada titulo é necessario que haja uma quebra de linha

const obj = require("./filmes.json")

for (let titulo of obj) {
  console.log(`\nO título do filme é: ${titulo.Title})\n`)
}





