let string = 'P6P2P7P4P5CCCCCP3P1'
let reCriminals = /C+/;

let result = string.match(reCriminals);

console.log(result);