// Loose equality (==) converts both values to a common type before comparing.
// This is why empty strings and numeric strings can appear equal to 0.
console.log("" == 0); // true -> empty string is coerced to 0
console.log("0" == 0); // true -> "0" is coerced to number 0
console.log(" " == 0); // true -> whitespace-only string is coerced to 0
console.log(false == 0); // true -> false is coerced to 0

// Strict equality (===) compares both value and type.
console.log("" === 0); // false -> string vs number
console.log("0" === 0); // false -> string vs number
console.log(" " === 0); // false -> string vs number
console.log(false === 0); // false -> boolean vs number

// NOTE: == allows type coercion, while === does not.
// In interviews, remember: loose comparison can hide type differences.

