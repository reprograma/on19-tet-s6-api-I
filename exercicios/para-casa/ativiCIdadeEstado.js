//IMPORTANDO JSON PARA JS
const data = require("./cidade-e-estados.json")

//console.log(data[0].estados[2]) //poderia acessar assim também


//NESSE CÓDIGO SERÁ PERGUNTADO AO USUÁRIO QUAL ESTADO DESEJA VER DETALHES, COMO SIGLA, CIDADES
var readline = require('readline');
var estado = readline.createInterface(
  process.stdin, process.stdout);

  estado.question('Qual estado deseja ver detalhes ?[OBS: entre com a sigla ex.: PA, MA...] : ', (VerEstado) => {
    console.log(VerEstado);

    if (VerEstado == "AC"){
      console.log(data[0].estados[0]) 
  }
     if  (VerEstado =="AL") {
        console.log(data[0].estados[1]) 
        
 }
 if (VerEstado == "AM") {
  console.log(data[0].estados[2]) 

 }
 if (VerEstado =="AP"){
  console.log(data[0].estados[3])
 }

 if (VerEstado=="BA"){
  console.log(data[0].estados[4])
 }

 if (VerEstado=="CE"){
  console.log(data[0].estados[5])
 }

 if (VerEstado=="DF"){
  console.log(data[0].estados[6])
 }

 if (VerEstado=="ES"){
  console.log(data[0].estados[7])
 }

 else if (VerEstado=="GO"){
  console.log(data[0].estados[8])
 }

 else if (VerEstado=="MA"){
  console.log(data[0].estados[9])
 }

 else if (VerEstado=="MG"){
  console.log(data[0].estados[10])
 }

 else if (VerEstado=="MS"){
  console.log(data[0].estados[11])
 }

 else if (VerEstado=="MT"){
  console.log(data[0].estados[12])
 }

 else if (VerEstado=="PA"){
  console.log(data[0].estados[13])
 }

 else if (VerEstado=="PB"){
  console.log(data[0].estados[14])
 }

 else if (VerEstado=="PE"){
  console.log(data[0].estados[15])
 }

 else if (VerEstado=="PI"){
  console.log(data[0].estados[16])
 }

 else if (VerEstado =="PR"){
    console.log(data[0].estados[17])
 }

 else if (VerEstado =="JR"){
    console.log(data[0].estados[18])
 }

 else if (VerEstado =="RN"){
    console.log(data[0].estados[19])
 }

 else if (VerEstado =="RO"){
    console.log(data[0].estados[20])
 }

 else if (VerEstado =="RR"){
    console.log(data[0].estados[21])
 }

 else if (VerEstado =="RS"){
    console.log(data[0].estados[22])
 }

 else if (VerEstado =="SC"){
    console.log(data[0].estados[23])
 }


 else if (VerEstado =="SE"){
    console.log(data[0].estados[24])
 }

 else if (VerEstado =="SP"){
    console.log(data[0].estados[25])
 }
 else {
  console.log(data[0].estados[26])
 }
 
 })
 /*Professora eu sei que xeistem outras formas de resolver essa atividade, mas resolvi fazer dessa forma,
 porque achei mais interesante, foi usado muitas linhas mas, o que importa é que está funcionando como o esperado né?!*/
 