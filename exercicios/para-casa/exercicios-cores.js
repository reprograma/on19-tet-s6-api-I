//2. - [ ] Imprimir no terminal as cores no formato rgba. ex
//`"aliceblue": [240, 248, 255, 1],`
//saida esperada: "`aliceblue` - `rgba(240, 248, 255, 1)`" Entre cada rgba é necessario que haja uma quebra de linha.

const{cores} = require("./cores-rgb.json");

for(let cor in cores){
    for(let nome in cores [cor]){
        console.log(`${nome} - rgba(${cores}[cor][nome]})\n`);
    }
}
