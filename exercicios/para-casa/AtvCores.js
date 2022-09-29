// 2. - [ ] Imprimir no terminal as cores, quebrando linha, com a seguinte formatacao: ex `rgb(0,0,0)`

for (let cor in obj) {
    for (let nome in obj[cor]) {
      console.log(`${nome} - rgba(${obj[cor][nome]})\n`);
    }
  }