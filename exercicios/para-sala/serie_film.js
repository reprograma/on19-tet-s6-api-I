const minhasSeries =  require("./series3.json")

//DUAS FORMAS DE ACESSAR ITENS
minhasSeries.forEach((series) => {
    console.log(series.título)//irá mostrar "death note" e "Stranger Things"

      

});

for (let Series of minhasSeries ) {
    console.log(Series.dublado) //irá mostrar true e true
}
// imprimir o titulo, dublagem e cada personagem
series.forEach((seri) => {
    console.log(seri.título)
    console.log(seri.dublado)

    for (let personagem of seri.personagem) {
        console.log(personagem)
        console.log(seri.personagem.join("\n"))
    }

})
//percorrer a lista de serie

//imprimir titulo e dublagem
//percorrer lista de personagem
//imprimir cada um dos personagens