const movies = require('./filmes')
const colors = require('./cores-rgb')
const states = require('./cidade-e-estados')

console.clear ()

//Exercício 1 - Filmes
/*

 movies.forEach((movie) => console.log (`\nO título do filme é: ${movie.Title}`))
colors.forEach((color) => console.log (color))

*/


//Exercício 2 - Cores
/*

const colorsObj = colors [0]
const keys = Object.keys(colorsObj)
const temp = []
keys.forEach ((key) => {
    console.log (`${key} - rgba(${colorsObj[key][0]}, ${colorsObj[key][1]}, ${colorsObj[key][2]}, ${colorsObj[key][3]})\n` )
})

*/


//Exercício 3 - Cidades e Estados

const statesObj = states[0].estados
let cities = []
statesObj.forEach ((state) => {
    console.log (`\nestado: ${state.nome}
sigla: ${state.sigla}
cidades:`)
    state.cidades.forEach ((city) => console.log (city))
    console.log (`-------------------------------------------`)
})