const {color} = require("./cores-rgb")

//2- Imprimir no terminal as cores no formato rgba. ex "aliceblue": [240, 248, 255, 1], saida esperada: "aliceblue - rgba(240, 248, 255, 1)" Entre cada rgba é necessario que haja uma quebra de linha.

const nameColor = Object.keys(color[0])
const indexColor = Object.values(color[0])

for (i = 0; i < nameColor.length; i++) {
  const newColor = (`${nameColor[i]} - RGBA (${indexColor[i]})\n`)
  console.log(newColor)
}