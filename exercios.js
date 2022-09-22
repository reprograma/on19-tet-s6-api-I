console.clear();
console.log("Exercício 1 ")
const filmes = require("./filmes.json");
filmes.title;
filmes.forEach ((title)=>{
console.log(title.Title)
})

      console.log("Exercício 2 ");

      const cor = require("./cores.json");
  
      for (const key in cor) {
        if (Object.hasOwnProperty.call(cor, key)) {
            const element = cor[key];
            //console.log(element); retorna o objeto da array com chave/valor
            for (let core in element) {
                if (Object.hasOwnProperty.call(element, core)) {
                    const corRgba = element[core];
                    //console.log(corRgba); retorna os valores do objeto da array 
                    console.log(`${core} - rgba(${corRgba})\n`); // imprime os valore da chave e dos value
                }}}}

                console.log("Exercício 3 ")
                const local = require("./cidades-e-estados.json");
                local.estados;
                //local['cidades-e-estados']
                
                local.forEach(element => {
                    console.log(element.sigla+element.nome+element.cidades);
                });