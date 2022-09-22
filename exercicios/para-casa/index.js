const {obj} = require("./filmes")

const {cores} = require("./cores-rgb")




const {data} = require("./cidade-e-estados")



for (let index = 0; index < obj.length; index++) {
    const element = obj[index];
    
    console.log("titulo: " +  element.Title)
}



