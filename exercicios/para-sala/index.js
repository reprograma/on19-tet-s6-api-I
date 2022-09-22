


/// commonJs ESM

const myBest = require("./sinestesia.json")

//accessing an attribute by the key
myBest.nome

//accessing an attribute by the property
myBest["nome"]

const key = "nome"

myBest[key]

console.log("O meu nome é " + myBest.nome 
+ ", minha cor favorita é " + myBest.cor_favorita 
+ " e minha música favorita é " + myBest.musica_favorita + ".")

console.log(`O meu nome é ${myBest.nome}, minha cor favorita é ${myBest.cor_favorita} e minha música favorita é ${myBest.musica_favorita}.`)

// to print artists from item 2

const music = require("./music.json")



console.log(music[0].artist)
console.log(music[1]["artist"])

for (i in music) {
    console.log(music[i].artist)
}

music.forEach((i) => {
    console.log(i.artist)
})