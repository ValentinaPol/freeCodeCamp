let sample = "Whitespace is important in separating words";
let countNonWhiteSpace = /\S/g; // equal [^ \r\t\f\n\v]
let result = sample.match(countNonWhiteSpace);

console.log(result); // 32