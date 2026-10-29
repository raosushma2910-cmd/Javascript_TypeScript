//Immediately Invoked Function Expression (IIFE)
//They don't need to be called. 


function name1() {
    console.log("Hi")
}
name1();


(function(){
    console.log("Anonymous Fn");
})();

(function () {
    console.log("Staging")
})();


//Arrow function
(() => {
    console.log("Setup complete");
})();

//example -2
(function(name){
    console.log(`${name} is logged in`);
}) ("Sushma");

//arrow function
((name)=>{
    console.log(`${name} is logged in`);
}) ("Sushma");
console.log("-------");

//Example -3
(function(name,status){
    console.log(`${name} is ${status}`);
})("Sushma","online");

//arrow function
((name,status)=>{
    console.log(`${name} is ${status}`);
})("Sushma","online");
console.log("-------");

//example -4
const welcomeMessage = (function(name){
    return `Welcome, ${name}`;
})("Sushma")
console.log(welcomeMessage);
