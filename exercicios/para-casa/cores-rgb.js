//2. Imprimir no terminal as cores, quebrando linha, no formato rgba. 
//Ex: `"aliceblue": [240, 248, 255,1]` saida esperada: `aliceblue` - `rgba(240, 248, 255, 1) ` 
//Entre cada rgba é necessário que haja uma quebra de linha.

const obj = require("./cores-rgb.json")

//exercício feito com um for in
for (let cor in obj) { //uso o for of para chamar a lista de objetos que chamei de obj
    for (let nome in obj[cor]) { //depois cria um parâmetro qualquer, que chamei de nome, depois vem a lista de novo e o parâmetro cor dentro de parenteses porque é um array
      console.log(`${nome} - rgba(${obj[cor][nome]})\n`); //depois, chama o nome, coloca o - rgba para ficar igual o que a profs pediu, vem a lista de novo, a cor criada anteriormente e nome e "\n" para pular linha
    }
  }
  
  