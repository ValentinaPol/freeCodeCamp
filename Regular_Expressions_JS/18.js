let quoteSample = "The five boxing wizards jump quickly.";
let alphabetRegexV2 = /\w/g // equal /[A-Za-z0-9_]/
//let alphabetRegexV2 = /\w+/g // equal /[A-Za-z0-9_]+/
let result = quoteSample.match(alphabetRegexV2).length;

console.log(result);