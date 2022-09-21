//Imprimir no terminal os titulos da lista de filme que está no arquivo filmes.js,
// contendo a seguinte mensagem: `O titulo do filme: ` titulo. Entre cada titulo é necessario que haja uma quebra de linha

const filmes = require("./filmes.json");

filmes.forEach((filme) => {
    console.log("O titulo do filme é: " + filme.Title + "\n");
});

/*Imprimir no terminal as cores no formato rgba. ex
`"aliceblue": [240, 248, 255, 1],`
saida esperada: "`aliceblue` - `rgba(240, 248, 255, 1)`" Entre cada rgba é necessario que haja uma quebra de linha.
*/

const cores= require("./cores-rgb.json");

for (let cor in cores) {
  for (let nome in cores[cor]) {
    console.log(`${nome} - rgba(${cores[cor][nome]})\n`);
  }
}


 //Imprimir no terminal, o `Estado`, `sigla` e `cidades`, ex:
const pais = require("./cidade-e-estados.json");

let info = pais[0].estados;

info.forEach((estado) => {
  console.log("\nEstado: " + estado.nome + "\nSigla: " + estado.sigla + "\nCidades:\n" + estado.cidades.join("\n"))
});