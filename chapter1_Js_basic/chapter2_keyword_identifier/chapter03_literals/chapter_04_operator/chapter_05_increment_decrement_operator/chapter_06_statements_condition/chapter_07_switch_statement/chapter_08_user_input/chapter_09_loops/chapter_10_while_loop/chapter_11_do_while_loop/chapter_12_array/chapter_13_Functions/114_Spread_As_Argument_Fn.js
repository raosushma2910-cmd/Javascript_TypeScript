function hasError(...codes) {
    return codes.some(c => c >= 400);
}

let responseCodes = [200, 201, 404];
let responseCodes2 = [200, 201, 404, 500];
hasError(...responseCodes);

console.log(hasError(...responseCodes)); // true

//example -2
//rest
// Rest gathers the arguments into quantities
function hasLowStock(...quantities) {
  return quantities.some(quantity => quantity <= 5);
}

// Spread passes the array values as arguments
const stockLevels = [12, 8, 3];
console.log(hasLowStock(...stockLevels)); // true

console.log("---------");

//example-3
function hasFailedtest(...results){
return results.some(result => result==="fail")
}
const test = ["pass", "fail", "pass"]
console.log(hasFailedtest(...test));