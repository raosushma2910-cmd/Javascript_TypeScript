function placeOrder(item, callback) {
    console.log("Placing an order...");
    console.log("Order placed:", item);

    if (typeof callback === "function") {
        callback();
        return;
    }

    console.log("No callback provided.");
}

// First way - named function
function completeOrderPrint() {
    console.log("Normal function callback");
}

placeOrder("Burger", completeOrderPrint);

// Second way - anonymous function
placeOrder("Burger", function () {
    console.log("Order is ready! Pick it up.");
});

// Third way - arrow function
placeOrder("Burger", () => {
    console.log("Arrow function callback: I am also a function without a name!");
});
