//Após converter a lista de filmes de JS para JSON foi resolvido o primeiro exercício
const lista_filmes = require("./filmes.json");

lista_filmes.forEach((filme) => {
    console.log("\nO título do filme: " + filme.Title)
});



//Quanto ao segundo, consegui resolver em três maneiras diferentes. As duas primeiras são extremamente similares quanto ao método (importar JSON), variando apenas
//o uso de for ou forEach. Para a terceira criei uma função na versão JS da lista, usando um dos métodos anteriores e chamei essa função novamente após importação
/*const colorido = require("./cores-rgb.json")

Object.entries(colorido[0]).forEach(([key, value]) => {
    console.log(`\n${key} - rgba(${value})`);
})

for (const [key, value] of Object.entries(colorido[0])) {
    console.log(`\n${key} - (${value})`);
}*/

const {cor} = require("./cores-rgb.js")

cor();

/* //Esse comando é gigante e não irá rodar inteiro no terminal, caso queira conferir é necessário remover a notação em volta do código
const {data} = require("./cidade-e-estados.js")

const toPrint = data[0].estados.map((estado) => {
   while (estado.nome != "São Paulo") {
    const estados = estado.nome;
    const sigla = estado.sigla;
    const cidades = estado.cidades;
    return `
    Estado: ${estados},
    Sigla: ${sigla},
    Cidades: \n${cidades.join("\n")}`
  }})  
  console.log(toPrint.join(";"));
  */
