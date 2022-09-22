const {obj} = require("./filmes")

//1- Imprimir no terminal os titulos da lista de filme que está no arquivo filmes.js, contendo a seguinte mensagem: O titulo do filme: titulo. Entre cada titulo é necessario que haja uma quebra de linha

obj.forEach((filme) =>{
    console.log(`Titulo do filme: ${filme.Title} \n`);
})