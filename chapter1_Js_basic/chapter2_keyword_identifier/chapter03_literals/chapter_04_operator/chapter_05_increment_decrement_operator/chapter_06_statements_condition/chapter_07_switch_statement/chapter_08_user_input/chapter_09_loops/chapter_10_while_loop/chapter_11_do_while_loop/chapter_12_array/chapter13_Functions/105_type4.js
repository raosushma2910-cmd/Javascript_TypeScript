// Type 4 - With arg/ With return

function sumOfTwoNumbers(a,b){
    return a+b;
}

let c = sumOfTwoNumbers(4,5);
console.log(c);
console.log(sumOfTwoNumbers(4,5));

//example -2
function subtractTwoNumbers (a,b){
    return a-b;
}
let result =  subtractTwoNumbers(9,4);
console.log(result); // storing and printing
console.log(subtractTwoNumbers(9,4)); // directly printing

//example -3
function createOrderMessage(name, orderNumber) {
    return `Hello ${name}, your order number is ${orderNumber}.`;
}

let message = createOrderMessage("Sushma", 1234);
console.log(message);


//example-4 with turnary operator
function getStockMessage(isInStock, productName) {
    return isInStock
        ? `Hi ${productName}, is available.`
        : `Hi ${productName}, is out of stock.`;
}

let stock = getStockMessage(true, "shoe");
console.log(stock);

let stock1 = getStockMessage(false, "Watch");
console.log(stock1);

//example -4
function getPaymentMessage(paymentSucessful,name){
    return paymentSucessful
   ? `Hi ${name},payment was successful`
   : `Hi ${name},payment was failed`;
}
let displayMessage = getPaymentMessage(true,"Sushma");
console.log(displayMessage);
let displayMessage1 = getPaymentMessage(false,"Sushma");
console.log(displayMessage1);

//example -5
function getLoginMessage(loginSucessful,username){
    return loginSucessful
    ?`Hello ${username}, welcome back`
    : `Hello ${username},login failed`;
}
let loginMessage = getLoginMessage(true,"Sushma");
console.log(loginMessage);
let loginMessage1 = getLoginMessage(false,"Sushma");
console.log(loginMessage1);
