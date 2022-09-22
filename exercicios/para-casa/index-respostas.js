console.clear()
//1º: Imprimir no terminal os titulos da lista de filme que está no arquivo filmes;
// contendo:`O titulo do filme: ` titulo. Entre cada titulo é necessario uma quebra de linha.
//as respostas aqui são para os documentos json:
const filmes = require("./filmes copy.json")
filmes.forEach((filme) => {
    console.log("\n O título do filme é: "+ filme.Title)
})


//2º: Imprimir no terminal as cores, quebrando linha, com a seguinte formatacao: ex `rgb(0,0,0)`
//as respostas aqui são para os documentos json:
const cores = require("./cores-rgb copy.json")
console.log("Exercicio 2");
for (let cor in cores) {
    for (let nome in cores[cor]) {
        console.log(`rgba(${cores[cor][nome]})\n`);
    }
  }



//3º: Imprimir no terminal, o Estado, sigla e cidades, quebrando linha entre eles para a divisao, inclusive de cada cidade.
const estados = require("./cidade-e-estados.json")
console.log("Exercicio 3")
   estados.forEach(index =>{
    console.log("\n\n" + index.nome + " " +index.sigla + "\n\n" + 
    index.cidades.join("\n"))
  })