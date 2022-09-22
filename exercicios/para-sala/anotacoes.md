```json
{
 "propriedade ou chave key" : [array] 
 "propriedade ou chave key" : "texto" num ou null
 "propriedade ou chave key" : 12345
 "propriedade ou chave key" : {
    "propriedade ou chave key" : { }
 }
 "propriedade ou chave key" : [
    [], {}, "", 12345
 ]
}
```

```json
[
    {
        "propriedade ou chave key" : 2022-09-17
    }
]
```
// acessar o objeto
//onde se encontra
//como acessar?

// commonJs ESM 

// todos de uma vez
const preferencias  = require("./minhas-preferencias.json")

// ES6
//exdemplo de ES6  import batatinha from "./minhas-preferencias.json";

//acessa atributo pela chave
preferencias.nome

//exemplos errados de propriedade de JSON
//preferencias.cor-favorita
//preferencias.cor favorita

// como acessa-los
preferencias["corFavorita"]

//acessa um atributo pela propriedade
preferencias["nome"]

const key = "nome"
preferencias[key]

/* for Of arr -> percorre um array e sua variavel e o valor
for In arr -> percorre um array e sua variavel é a chave
ambos os for podem ser interrompidos 

forEach -> percorre um array e seus parametros sao
1. o valor
2. indice
3. arr

*/
