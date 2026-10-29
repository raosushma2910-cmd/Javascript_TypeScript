// Function as Expression

function greet(name){
    return `Hello, ${name}`;
}

// Anonymous Fn - Fn without name.
const greet1 = function (name){
    return `Hello, ${name}`;
}

console.log(greet1("Sushma"));
console.log(greet("Shona"));
console.log("------------");

//example -1
const showfavoritecolor = function (name,color){
    console.log(`${name} likes ${color}`);
}
showfavoritecolor("Sushma","Black");
showfavoritecolor("Sushma","Maroon");
showfavoritecolor("Sushma","Blue");
console.log("------------");

//Example -2
const showFavoriteSnack = function(name,snack){
    console.log(`${name} enjoys ${snack}`);
}
showFavoriteSnack("Sushma","Healthy Food");
showFavoriteSnack("Sushma","Salads");
showFavoriteSnack("Sushma","Soups");