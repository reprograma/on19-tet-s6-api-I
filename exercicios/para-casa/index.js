const { obj } = require("./filmes");
const { object } = require("./cores-rgb");
const { data } = require("./cidade-e-estados");

// exercício 1
const printFilmes = obj; 

printFilmes.forEach((filme) => console.log("O título do filme: " + filme.Title + "\n")); // imprime no terminal os títulos da lista de filme que está no arquivo filmes.js


console.log(`________________________________________________________________________
`); // adiciona uma linha para melhor legibilidade das impressões entre os exercícios


// exercício 2
const printCores = object; 
//console.log(printCores); retorna o array object que contém um item do tipo objeto

for (const key in printCores) {
    if (Object.hasOwnProperty.call(printCores, key)) {
        const element = printCores[key];
        //console.log(element); retorna o objeto da array com chave/valor
        for (cor in element) {
            if (Object.hasOwnProperty.call(element, cor)) {
                const corRgba = element[cor];
                //console.log(corRgba); retorna os valores do objeto da array 
                console.log(`${cor} - rgba(${corRgba})\n`); // retorna as chaves e os valores do objeto da array
        };
    }
}
}


console.log(`_____________________________________________________________________________________________________

OBS: para executar o exercício 3 no terminal, por gentileza, apague os sinais de comentário multilinha "/*" e "*/" abaixo
`); // adiciona uma instrução que aponta uma ação na linha 39 e 52 do código para rodar o próximo exercício no terminal

/*
// exercício 3 
const printData = data;
const listaRegioesBr = printData[0].estados.map((estado) => {// cria uma variável com os dados na ordem solicitada 
    const estados = estado.nome;
    const sigla = estado.sigla;
    const cidades = estado.cidades;
    return `
    Estado: ${estados},
    Sigla: ${sigla},
    Cidades: \n${cidades.join("\n")}`
});

console.log(listaRegioesBr.join(";")); // imprime em formato de string a lista de Estados, siglas e cidades do Brasil*/