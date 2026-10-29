function greet(name){
    return `Hello, ${name}`;
}

const greet2 = (name) => `Hello, ${name}`;
console.log("-----------");


//Example -1
//Arrow with block boday{}
const calculateArea = (length,width)=> {
    return length*width;
}
console.log(calculateArea(8,4));
console.log("-----------");

//example -2
const calculatePay =(hours,hourlyRate)=> {
    return hours*hourlyRate;
}
console.log(calculatePay(7,20));