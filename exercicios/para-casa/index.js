//1. - [ ] Imprimir no terminal os titulos da lista de filme que está no arquivo filmes.js, com a seguinte mensagem: titulos:  a lista de titulo, quebrando linha, para a melhor visualização.


const listaFilmes = require("./listaFilmes.json")

listaFilmes.forEach((filme) => {
    console.log("\n O Titulo do filme é: " + filme.Title + "\n")
   
  
})


//[ ] Imprimir no terminal as cores, quebrando linha, com a seguinte formatacao: ex `rgb(0,0,0)`

const cores = require("./cores-rgb.json")

/*for(let cor of cores) {
    console.log(cor) 
}*/
//minha solução inicial,contudo não atendia a todas as solicitões
cores.forEach ((rgbs)=>{
    Object.keys (rgbs).forEach(cor => {
        const rgb = rgbs[cor]
        console.log(`${cor} - rgb(${rgb.join(" , ")})`)
    })

})

// [ ] Imprimir no terminal, o Estado, sigla e cidades, quebrando linha entre eles para a divisao, inclusive de cada cidade.
// não consegui imprimir a quebra de linhas entre as cidades



const pais= require("./cidadesEstados.json")

/*estados.forEach((estado) => {
    console.log("\nSigla :" + estado.sigla)
    console.log("\nNome do Estado :" + estado.nome)
    console.log(`\nCidades : ${estado.cidades}\n`)

  
})*/



