

/* Imprimir no terminal os titulos da lista de filme que está no arquivo filmes.js,
 com a seguinte mensagem: titulos: a lista de titulo, quebrando linha, para a melhor visualização.
 
 */

 const filmes = require("./filmes.json")
 filmes.forEach(index => {
console.log ("\n Title: " + index.Title)
console.log("Language:" + index.Language)
 });