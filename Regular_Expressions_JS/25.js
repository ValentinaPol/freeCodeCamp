/*Recall that you use the plus sign + to look for one or more characters and the asterisk * to look for zero or more characters.*/

let ohStr = "Ohhh no";
let ohRegex = /Oh{3,6} no/; 
let result = ohRegex.test(ohStr);