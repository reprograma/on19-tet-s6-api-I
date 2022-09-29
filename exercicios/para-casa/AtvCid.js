
//3. - [ ] Imprimir no terminal, o Estado, sigla e cidades, quebrando linha entre eles para a divisao, inclusive de cada cidade.

const estados = require("./cidade-e-estados.json")
estados.forEach(index =>{
 console.log("\n\n" + index.nome + " " +index.sigla + "\n\n" + 
 index.cidades.join("\n"))
})

