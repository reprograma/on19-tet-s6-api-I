//* Imprimir no terminal as cores, quebrando linha, com a seguinte formatacao: ex `rgb(0,0,0)` */

const cores = require("./cores-rgb.json")
    
for (let cor in cores) {
    for (let nome in cores[cor]) {
      console.log(`rgba(${cores[cor][nome]})\n`);
    }
  }

    
