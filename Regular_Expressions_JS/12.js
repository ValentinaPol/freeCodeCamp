let difficultSpelling = "Mississippi";
let myRegex = /s+/g; 
//let myRegex = /[s]/g; 
let result = difficultSpelling.match(myRegex);

console.log(result);