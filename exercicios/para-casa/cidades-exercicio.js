const {data} = require("./cidade-e-estados")

/*3 - Imprimir no terminal, o Estado, sigla e cidades 
estado: `estado`,
sigla: `sigla`,
cidades:
rio de janeiro
sao paulo
*/

const state = Object.values(data[0].estados) 

state.forEach((cityAndState)=> {
  console.log("\n Estado: " + cityAndState.nome + "\n Sigla: " + cityAndState.sigla + "\n Cidades: \n" + cityAndState.cidades.join ("\n"));
});