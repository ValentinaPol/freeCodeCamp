let sample = "Whitespace is important in separating words";
let countWhiteSpace = /\s/g; // equal [ \r\t\f\n\v]
let result = sample.match(countWhiteSpace);

console.log(result);