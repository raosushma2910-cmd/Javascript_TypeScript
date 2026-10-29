function greet(name){
    return `Hello, ${name}`;
}

let op = greet('Alice');
console.log(op);

//example- 2
function introduce(name,hobby){
        console.log(`${name} enjoys ${hobby}.`);
}
introduce("Sushma", "Painting");
introduce("Sushma", "Swiming");
introduce("Sushma", "cooking");

//example -3
function shareFavoritefood(name,food){
    console.log (`${name}'s favorite food is ${food}.`);
}
shareFavoritefood("Sushma","Idly");
shareFavoritefood("Sushma","Dosa");
shareFavoritefood("Sushma","Pulav");
console.log("---------------------");

//example-4
function shareFavoriteDrink(name, drink){
     console.log (`${name}'s favorite drink is ${drink}.`);

}
shareFavoriteDrink("Sushma","Coffe");
shareFavoriteDrink("Sushma","milk");
shareFavoriteDrink("Sushma","Jucie");
console.log("---------------------");

//example-5
function shareFavoritePlace(name,place){
    console.log(`${name}'s favorite place is ${place}.`)
}
shareFavoritePlace("Sushma","Shivamogga");
shareFavoritePlace("Sushma","ooty");
shareFavoritePlace("Sushma","andaman");
console.log("---------------------");

//example -6
function shareFavoriteSeason(name, season){
    console.log(`${name}'s favorite season is ${season}`);
}
shareFavoriteSeason("Sushma","Summer");
shareFavoriteSeason("Sushma","Mansoon");
shareFavoriteSeason("Sushma","Winter");