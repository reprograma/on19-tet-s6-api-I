//2 [x] Imprimir no terminal as cores, quebrando linha, no formato rgba. Ex: `"aliceblue": [240, 248, 255,1]` saida esperada: `aliceblue` - `rgba(240, 248, 255, 1) ` Entre cada rgba é necessário que haja uma quebra de linha.

const obj = require("./cores-rgb.js")

for (let cor of obj) {
    console.log(`${cor}\n`)
}