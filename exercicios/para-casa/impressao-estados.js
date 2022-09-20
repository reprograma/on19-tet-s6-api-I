//3. - [ ] Imprimir no terminal, o `Estado`, `sigla` e `cidades`, ex:
//estado: `estado`,
//sigla: `sigla`
//cidades:
//rio de janeiro
//sao paulo 

console.clear();

const data = require(".cidade-e-estado.js")

for (let todos of data) {
    console.log(`Estado: ${todos.nome.join("\n")}`)
    console.log(`Sigla: ${todos.sigla.join("\n")}`)
    console.log(`Cidades: ${todos.cidades.join("\n")}`)
}
