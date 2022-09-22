

const print_genres = require("./media.json");

print_genres.forEach((item) => {
    console.log("Primeiro método:" + item.genres)
})


for (i in print_genres) {
    console.log("\nSegundo método:" + print_genres[i].genres)
};