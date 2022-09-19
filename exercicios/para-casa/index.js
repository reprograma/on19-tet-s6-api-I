const {data} = require("./cidade-e-estados")
const {cores} = require("./cores-rgb")
const {obj} = require("./filmes")


//1- Imprimir no terminal os titulos da lista de filme que está no arquivo filmes.js, contendo a seguinte mensagem: O titulo do filme: titulo. Entre cada titulo é necessario que haja uma quebra de linha

obj.forEach((filme) =>{
    console.log(`Titulo do filme: ${filme.Title} \n`);
})

//2-  Imprimir no terminal as cores no formato rgba. ex "aliceblue": [240, 248, 255, 1], saida esperada: "aliceblue - rgba(240, 248, 255, 1)" Entre cada rgba é necessario que haja uma quebra de linha.

let nomeCores = Object.keys(cores[0])
let numeroCores = Object.values(cores[0])

for (let i = 0; i < nomeCores.length; i++) {
  const novalistacores = (`${nomeCores[i]} - RGBA (${numeroCores[i]})`)
  console.log(novalistacores)
}

/*3 - Imprimir no terminal, o Estado, sigla e cidades 
estado: `estado`,
sigla: `sigla`,
cidades:
rio de janeiro
sao paulo
*/

let objetoEstado = Object.values(data[0].estados) 
let arrayEstados = Object.entries(objetoEstado) 

objetoEstado.forEach((brasil)=> {
  console.log("\nEstado: " + brasil.nome);
  console.log("Sigla: " + brasil.sigla);
  console.log("Cidades: \n" + brasil.cidades.join ("\n"));
});