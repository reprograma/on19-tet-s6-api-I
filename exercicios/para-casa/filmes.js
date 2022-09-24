//1.Imprimir no terminal os titulos da lista de filmes que está no arquivo filmes.js, contendo a seguinte mensagem: `O titulo do filme é: ` titulos. Entre cada titulo, é necessário que haja uma quebra de linha para a melhor visualização.

const obj = require("./filmes.json")

for (let titulo of obj) { //uso o for of para chamar a lista de objetos que chamei de obj
    console.log(`O título do filme é: ${titulo.Title}`) //depois cria um parâmetro qualquer, que chamei de titulo aqui e vou colocar .Title que é a propriedade
}

