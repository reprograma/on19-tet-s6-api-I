//3. Imprimir no terminal, o `Estado`, `sigla` e `cidades`, ex:
//estado: `estado`,
//sigla: `sigla`
//cidades:
//rio de janeiro
//sao paulo

const brasil = require("./cidade-e-estados.json")

let estados = brasil[0].estados

estados.forEach((estadoCidades) => {

    console.log(`\nEstado: ${estadoCidades.nome}\n`);
    console.log(`Sigla: ${estadoCidades.sigla}\n`);
    console.log(`Cidades: \n${estadoCidades.cidades.join("\n")}`)
})
