const cores = require("./cores-rgb.json")

for (let cor in cores) {
    for (let nome in cores[cor]) {
      console.log(`${nome} - rgba(${cores[cor][nome]})\n`);
    }
  }



