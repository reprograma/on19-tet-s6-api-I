const {data} = require("./cidade-e-estados")
const {cores} = require("./cores-rgb")
const {obj} = require("./filmes")


/*
1- Imprimir no terminal os titulos da lista de filme que está no arquivo filmes.js, contendo a seguinte mensagem: O titulo do filme: titulo. Entre cada titulo é necessario que haja uma quebra de linha
*/

/*
obj.forEach((filme) =>{
    console.log(`Titulo do filme: ${filme.Title} \n`);
})


/*
2-  Imprimir no terminal as cores no formato rgba. ex "aliceblue": [240, 248, 255, 1], saida esperada: "aliceblue - rgba(240, 248, 255, 1)" Entre cada rgba é necessario que haja uma quebra de linha.
*/
/*
let keys = Object.keys(cores[0])

let vals = Object.values(cores[0])

for (let i = 0; i < keys.length; i++) {
  const novatabelacores = (`${keys[i]} - RGBA (${vals[i]})`)
  console.log(novatabelacores)
}
*/


