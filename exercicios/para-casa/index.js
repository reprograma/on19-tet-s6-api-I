//# Exercício de Casa 🏠 

//## Imprimir informacoes no Terminal


//1. - [ ] Imprimir no terminal os titulos da lista de filme que está no arquivo filmes.js, contendo a seguinte mensagem: `O titulo do filme: ` titulo. Entre cada titulo é necessario que haja uma quebra de linha
const filmes = require("./filmes.js")

obj.forEach((filmes) => {
    console.log("\n O título do filme é: "+ filmes.Title)
})

//2. - [ ] Imprimir no terminal as cores no formato rgba. ex
//`"aliceblue": [240, 248, 255, 1],`
//saida esperada: "`aliceblue` - `rgba(240, 248, 255, 1)`" Entre cada rgba é necessario que haja uma quebra de linha.


const cor = require("./cores-rgb.js")

for (let cor in obj) {
    for (let nome in obj[cor]) {
      console.log(`${nome} - rgba(${obj[cor][nome]})\n`);
    }
  }

  
//3. - [ ] Imprimir no terminal, o `Estado`, `sigla` e `cidades`, ex:

//```
//estado: `estado`,
//sigla: `sigla`,
//cidades:
//rio de janeiro
//sao paulo

const estados = require("./cidade-e-estados.js")

   estados.forEach(index =>{
    console.log("\n\n" + index.nome + " " +index.sigla + "\n\n" + 
    index.cidades.join("\n"))
  })


