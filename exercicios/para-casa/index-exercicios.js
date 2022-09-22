//1. - [ ] Imprimir no terminal os titulos da lista de filme que está no arquivo filmes.js, contendo a seguinte mensagem: `O titulo do filme: ` titulo. Entre cada titulo é necessario que haja uma quebra de linha
const filmes =  require("./filmes.json")

filmes.forEach((Filme) => {

    console.log("O nome do filme é: " + Filme.Title)

})

/*2. - [ ] Imprimir no terminal as cores no formato rgba. ex
`"aliceblue": [240, 248, 255, 1],`
saida esperada: "`aliceblue` - `rgba(240, 248, 255, 1)`" Entre cada rgba é necessario que haja uma quebra de linha.*/

const coresRgba = require("./cores-rgb.json")

for (let rgba in coresRgba) {
    for (let nome in coresRgba[rgba]) {
        console.table(`Cor:  ${nome} - (${coresRgba[rgba][nome]})\n`)
    }
}


/*3. - [ ] Imprimir no terminal, o `Estado`, `sigla` e `cidades`, ex:

```
estado: `estado`,
sigla: `sigla`,
cidades:
rio de janeiro
sao paulo
``` */

const brasil = require("./cidade-e-estados.json")

const informacoes = brasil[0].estados

informacoes.forEach((dados) => {

    console.log("\n O Estado é: " + dados.nome + "\nA Sigla é: " + dados.sigla + "\nAs Cidades são: " + dados.cidades.join ("\n") )
   
  
   })