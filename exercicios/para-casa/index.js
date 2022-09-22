

const filme = require("./filmes.json");
const cores = require("./cores-rgb.json");
const  cidadesEstados  = require("./cidade-e-estados.json");


/*Imprimir no terminal os titulos da lista de filme que está no arquivo filmes.js, 
contendo a seguinte mensagem: O titulo do filme: titulo. Entre cada titulo é necessario que haja uma quebra de linha */
for (const filmes of filme) {
    filme.forEach((filmes) => {
        
        console.log(`Título do filme: ${filmes.Title} \n `);
    });
}

/*Imprimir no terminal as cores no formato rgba. ex
`"aliceblue": [240, 248, 255, 1],`
saida esperada: "`aliceblue` - `rgba(240, 248, 255, 1)`
" Entre cada rgba é necessario que haja uma quebra de linha.*/

for (let cor in cores) {
    for (let nome in cores[cor]) {
       console.log(`${nome} - RGBA(${cores[cor][nome]})\n`);
    }
} 




//Imprimir no terminal, o `Estado`, `sigla` e `cidades`,

   for (const key in cidadesEstados) {
    if (cidadesEstados.hasOwnProperty.call(cidadesEstados, key)) {
       const elemento = cidadesEstados[key];
        console.log(elemento);
     }
   }

