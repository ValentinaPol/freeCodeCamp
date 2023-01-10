let movieName = "2001: A Space Odyssey";
let numRegex = /\d/g; // equal [0-9]
let result = movieName.match(numRegex);

console.log(result);