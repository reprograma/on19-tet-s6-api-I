const { obj } = require("./filmes");
const cadaFilme = obj; 

cadaFilme.forEach((item) => console.log("O título do filme: " + item.Title + "\n"))
