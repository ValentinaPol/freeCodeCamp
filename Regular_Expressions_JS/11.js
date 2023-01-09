let quoteSample = "3 blind mice.";
let myRegex = /[^aeioyu0-9]/gi;
let result = quoteSample.match(myRegex);

console.log(result);