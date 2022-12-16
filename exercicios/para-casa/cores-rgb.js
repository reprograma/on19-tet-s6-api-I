//2. Imprimir no terminal as cores, quebrando linha, no formato rgba. 
//Ex: `"aliceblue": [240, 248, 255,1]` saida esperada: `aliceblue` - `rgba(240, 248, 255, 1) ` 
//Entre cada rgba é necessário que haja uma quebra de linha.

const [cores] = require("./cores-rgb.json")

  for (let [cor,rgba] of Object.entries(cores)) {
    console.log(`${cor} - rgba(${rgba.join (", ")})`)
  }
  
  