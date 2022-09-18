// acessar o objeto
// aonde se encontra? [x]
// como acesso?

// commonJs ESM

const preferencias = require("./minhas-preferencias.json")

//aqui acessa um atributo pela chave
preferencias.nome

// exemplos errados de propriedade de JSON
// preferencias.cor-favorita
// pereferncias.cor favorita

// como acessa-los
preferencias["cor_favorita"]

// aqui acessa um atributo pela propriedade
preferencias["nome"]

const key = "nome"
preferencias[key]

console.log("o meu nome é " + preferencias.nome + 
", minha cor favorita é " + preferencias.cor_favorita + 
", minha musica favorita é " + preferencias.musica_favorita)