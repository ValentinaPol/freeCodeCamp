let quoteSample = "The five boxing wizards jump quickly.";
let nonAlphabetRegex = /\W/g; // equal [^A-Za-z0-9_]
//let nonAlphabetRegex = /\W/g; // equal [^A-Za-z0-9_]
let result = quoteSample.match(nonAlphabetRegex).length;

console.log(result);