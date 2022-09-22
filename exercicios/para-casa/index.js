// Exercício 1 - Imprimir no terminal os titulos da lista de filme que está no arquivo filmes.js, contendo a seguinte mensagem: O titulo do filme: titulo.
// Entre cada titulo é necessario que haja uma quebra de linha
const filmes = require('./filmes.json')

filmes.forEach(nomeFilme => {
  console.log('O título do filme é: ' + nomeFilme.Title)
})

/* Exercício 2 - Imprimir no terminal as cores no formato rgba. ex
 `"aliceblue": [240, 248, 255, 1],`
saida esperada: "`aliceblue` - `rgba(240, 248, 255, 1)`" Entre cada rgba é necessario que haja uma quebra de linha. */

const coresRgba = require('./cores-rgb.json')

for (let padraoRGB in coresRgba) {
  for (let nome in coresRgba[padraoRGB]) {
    console.table(`Cor:  ${nome} - (${coresRgba[padraoRGB][nome]})\n`)
  }
}

/* Exercício - [ ] Imprimir no terminal, o `Estado`, `sigla` e `cidades`, ex:
```
estado: `estado`,
sigla: `sigla`,
cidades:
rio de janeiro
sao paulo
``` */

const UFs = require('./cidade-e-estados.json')

const informacoes = UFs[0].estados

informacoes.forEach(dados => {
  console.log(
    '\n Estado: ' +
      dados.nome +
      '\nSigla: ' +
      dados.sigla +
      '\nCidades: ' +
      dados.cidades.join('\n')
  )
})
