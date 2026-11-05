let arr = [1,2,3];
console.log(arr);

// Add to END
arr.push(4);
console.log(arr);
console.log("---------------")

// Remove from END
arr.pop();
console.log(arr);
console.log("---------------")

//add
arr.push(5, 6);
console.log(arr);
console.log("---------------")


// Add to BEGINNING
arr.unshift(0);
console.log(arr);

// Remove from BEGINNING
arr.shift();
console.log(arr);
console.log("---------------")


// [ 1, 2, 3, 5, 6 ]
arr.splice(2,1);
console.log(arr);
console.log("---------------")


arr.splice(2, 0, 99);
// arr.splice(2, 1, 99);
// arr.splice(2, 2, 99);
console.log(arr);
console.log("---------------")


// [ 1, 2, 99, 5, 6 ]
arr.splice(1, 2, 10, 20);
console.log(arr);
