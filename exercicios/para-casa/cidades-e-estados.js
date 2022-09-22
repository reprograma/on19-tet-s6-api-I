const data = require("./cidade-e-estados.json")


let estado = data[0].estados // acessando estados do index 0 e chamando de "estado"

for (let i = 0; i < estado.length-1; i++) {
  let estadoCidades = estado[i]; //percorrendo e guardando os estados
  
  console.log(`UF: ${estadoCidades.sigla}`);
  console.log(`ESTADO: ${estadoCidades.nome}`);
  console.log('CIDADES: \n')
  

  for (let j = 0; j < estadoCidades.cidades.length; j++) {
    console.log(estadoCidades.cidades[j]);
    
  }

  console.log("\n***************************************\n");
  
}