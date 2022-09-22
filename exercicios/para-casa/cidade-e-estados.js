//3. Imprimir no terminal, o `Estado`, `sigla` e `cidades`, ex:
//estado: `estado`,
//sigla: `sigla`
//cidades:
//rio de janeiro
//sao paulo

const brasil = require("./cidade-e-estados.json")

brasil.forEach((tudo) => {
    console.log(Object.values(tudo))
})

