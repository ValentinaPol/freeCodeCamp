let movieName = "2001: A Space Odyssey";
let noNumRegex = /\D/g; // equal [^0-9]
let result = movieName.match(noNumRegex);

console.log(result);