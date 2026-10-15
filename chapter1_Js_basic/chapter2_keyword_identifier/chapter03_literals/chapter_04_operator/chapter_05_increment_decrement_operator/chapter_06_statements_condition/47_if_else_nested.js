// nested
let age = 25
if (age > 18) {
    console.log("sole trip");
    if (age > 26) {
        console.log("trip with parents");
    } else {
        console.log("sole trip, no Drink");
    }
}
else {
    console.log("with parents");
}