let score = 33
let score2 = "33a"
let score3 = null

// console.log(typeof score);
// console.log(typeof (score));

// console.log(typeof score2);
// console.log(typeof (score2));

let valueInNumber = Number(score2)

// console.log(typeof valueInNumber);
// console.log(typeof (valueInNumber));

// console.log(valueInNumber); //NaN -> Not a Number

// console.log(typeof score3);
// console.log(typeof (score3));

let valueInNumber2 = Number(score3)

// console.log(typeof valueInNumber2);
// console.log(typeof (valueInNumber2));

// console.log(valueInNumber2); //NaN -> Not a Number

let isLoggedIn = 1
let BoolisLoggedIn = Boolean(isLoggedIn)
console.log(BoolisLoggedIn);

let isLoggedIn2 = 0
let BoolisLoggedIn2 = Boolean(isLoggedIn2)
console.log(BoolisLoggedIn2);

let isLoggedIn3 = "rik"
let BoolisLoggedIn3 = Boolean(isLoggedIn3)
console.log(BoolisLoggedIn3);

let isLoggedIn4 = ""
let BoolisLoggedIn4 = Boolean(isLoggedIn4)
console.log(BoolisLoggedIn4);

let someNumber = 33
let stringNumber = String(someNumber)
console.log(stringNumber);
console.log(typeof stringNumber);
// node 01_JSbasics/03_conversionOps.js