function add(a, b, c) {
    return a + b + c;
}

//spread function
let num = [1, 2, 3, 5];
console.log(add(...num));

//Example-1
function greet(firstName, lastName) {
  console.log(`Hello, ${firstName} ${lastName}!`);
}

const nameParts = ["Sushma", "Rao"];
greet(...nameParts);