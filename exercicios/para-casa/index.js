//Imprimir no terminal os titulos da lista de filme que está no arquivo filmes.js,
// contendo a seguinte mensagem: `O titulo do filme: ` titulo. Entre cada titulo é necessario que haja uma quebra de linha

const movies = require("./filmes.json");

movies.forEach((movie) => {
    console.log("The title of the movie: " + movie.Title + "\n");
});

/*Imprimir no terminal as cores no formato rgba. ex
`"aliceblue": [240, 248, 255, 1],`
saida esperada: "`aliceblue` - `rgba(240, 248, 255, 1)`" Entre cada rgba é necessario que haja uma quebra de linha.
*/

const colors= require("./cores-rgb.json");

for (let color in colors) {
  for (let name in colors[color]) {
    console.log(`${name} - rgba(${colors[color][name]})\n`);
  }
}

 //Imprimir no terminal, o `Estado`, `sigla` e `cidades`, ex:
const countries = require("./cidade-e-estados.json");

let info = countries[0].states;

info.forEach((state) => {
  console.log("\nState: " + state.name + "\nSigla: " + state.sigla + "\nCidades:\n" + state.cidades.join("\n"))
});


// formas diferentes de fazer e chegar ao mesmo resultado;