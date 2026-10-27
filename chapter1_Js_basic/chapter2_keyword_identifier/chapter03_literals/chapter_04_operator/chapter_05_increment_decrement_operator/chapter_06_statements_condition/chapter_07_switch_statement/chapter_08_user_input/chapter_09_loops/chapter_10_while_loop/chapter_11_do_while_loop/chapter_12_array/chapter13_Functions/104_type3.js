// Type 3 =  with argument/parameter but no return type.

function greetByName(name){
    console.log("Hi", name);
}

greetByName("Pramod");
greetByName("Dipak");
greetByName("Meeti");
greetByName("Sangeetha");

let name1 = greetByName("Sumit");
console.log(name1);

//example -2
function multiply(a,b){
    console.log(a * b);
}
multiply(5,4);

// example -3
function substract(a,b){
    console.log(a - b);
}
substract(15, 5);

//example -3
function introduce(name, favouriteFood) {
  console.log("Hi, I'm " + name + " and I love " + favouriteFood);
}

introduce("Sushma", "Noodles");
introduce("Mishty", "Tuna Fish");
introduce("Lalitha", "Rotti");

//example -4
function shareFavoriteAnimal(name, animal) {
  console.log(name + "'s favorite animal is " + animal + ".");
}

shareFavoriteAnimal("Sushma", "cat");
shareFavoriteAnimal("Sushma", "dog");
shareFavoriteAnimal("Sushma", "cow");

//example -5
function recomendColour(name, colour){
 console.log(name + " recomends "  +  colour)
  }
 recomendColour("Sushma","Red");
 recomendColour("Sushma","Black");
 recomendColour("Sushma","blue");
 //example -6
 function describeWeather(name,weather){
    console.log(name + " says the weather is " + weather + ".");
 }
 describeWeather("Sushma", "Sunny");
 describeWeather("Sushma", "rainy");
 describeWeather("Sushma", "cold");

 // example -7
 function shareDrink(name,drink){
    console.log(name + " 's favorite drink is " + drink + ".");
 }
 shareDrink("Sushma" , "Tea");
 shareDrink("Sushma" , "Boost");
 shareDrink("Sushma" , "Coffee");
 //example -7
 function shareDessert(name, dessert){
    console.log(name + "'s favorite dessert is " +dessert + ".");
 }
shareDessert("Sushma", "Ice cream");
shareDessert("Sushma", "Jamun");
shareDessert("Sushma", "champakali");

//example-8
function shareWeekendPlan(name, activity){
    console.log(name + " plans to " + activity + " this weekend"+".");
}
shareWeekendPlan("Sushma","read");
shareWeekendPlan("Sushma","cook");
shareWeekendPlan("Sushma","walk");

// example -9
function shareMorningRoutine(name, activity){
    console.log(name + " likes to "+activity +" in the morning");
}
 shareMorningRoutine("Sushma", "walk");
 shareMorningRoutine("Sushma", "Cook");
 shareMorningRoutine("Sushma", "Yoga");