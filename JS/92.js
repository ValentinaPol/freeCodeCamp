function checkObj(obj, checkProp) {
    if(obj.hasOwnProperty(checkProp)){
      return obj[checkProp];
    }
    return "Not Found";
}

console.log({gift: "pony", pet: "kitten", bed: "sleigh"}, "gift");

