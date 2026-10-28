function greet(name){
    return `Hello, ${name}`;
}

const greet1 = function(name){
    return `Hello, ${name}`;
}

// Arrow Fn
const greet2 = (name2) => `Hello, ${name2}`;
// If you want to make a normal function to arrow function.
// Remove the keyword function, remove the keyword return, remove the curly braces, and use the =>

// ex-1
const showFavoriteSport = function(name,sports){
    console.log(`${name} enjoys ${sports}.`);
}
showFavoriteSport("Sushma","KhoKho");
showFavoriteSport("Sushma","vally Ball");
showFavoriteSport("Sushma","tenikot");
console.log("---------------");

//ex-3
// regular function
function calculateCost(cost,count){
    return cost*count;
}
console.log(calculateCost(8,4));

//arrow function
const calculateCostArrow = (cost,count) => cost*count;
console.log(calculateCostArrow(8,4));
console.log("---------------");

//ex-4
//regular function
function calculateDiscount(price,discount){
    return price-discount;
}
console.log(calculateDiscount(50,10));
//arrow function
const calculateDiscountArrow = (price,discount)=> price-discount;
console.log(calculateDiscountArrow(50,10));
console.log("---------------");

//Ex-5
//Arrow function
const calculateDeliveryFee =(distance,rate)=> distance*rate;
console.log(calculateDeliveryFee(6,4));