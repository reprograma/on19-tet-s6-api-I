const cidades = require("./cidade-e-estados.json")

for (let i of cidades) {
    console.log(i.nome + "\n" + i.sigla + "\n")
i.cidades.forEach((c) => {
console.log(c + "\n")
})

}