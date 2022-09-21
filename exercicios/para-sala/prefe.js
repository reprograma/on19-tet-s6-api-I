//Imprimir no terminal o item 1, 
//com a seguinte mensagem: O meu nome é ..., a minha cor favorita é ...., a minha musica favorita é 


// IMPORTANDO JSON
const minhasPreferencias = require("./Preferencia1.json");

// ACESSANDO AS INFORMAÇÕES dentro do JSON
console.log(`Meu nome é ${minhasPreferencias.name}\nMinha música favorita é ${minhasPreferencias.song}\nMinha cor favorita é ${minhasPreferencias["color"]}`);
// \n fará uma quebra de linha

// OUTRAS FORMAS DE ACESSAR 
//minhasPreferencias["nome"]
//const key = "nome"  >>> minhasPreferencias[key]