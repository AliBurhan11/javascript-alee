let score = true

// console.log(typeof(score))

let valueInNumber = Number(score)
// console.log(typeof(valueInNumber));
// console.log(valueInNumber);

// "33" => 33
// "33abc" => NaN - not a number
// undefined => NaN
// null => 0
// true or false => 1 and 0 respectively

let isLoggedIn = "alee"
let booleanIsLoggedIn = Boolean(isLoggedIn)
// console.log(isLoggedIn);
// console.log(booleanIsLoggedIn);

// 1 => true; 0 => false
// empty string "" => false; value added to string e.g "alee" => true

let someNumber = 44
let stringNumber = String(someNumber)

// console.log(stringNumber);
// console.log(typeof stringNumber);

// *********************************. Operations. ********************************.

let value = 3
let negValue = -value
// console.log(negValue);

// console.log(2+2);
// console.log(2*2);
// console.log(2-2);
// console.log(2**3);
// console.log(2/2);
// console.log(2%2);

let str1 = "hello "
let str2 = "alee"

// console.log(str1 + str2);

// console.log("1" + 2);
// console.log(1 + "2");
// console.log(1 + 2);
// console.log("1" + 2 + 3);
// console.log(1 + 2 + "3");

// console.log(true);
// console.log(+ true);
// console.log(3 + true);
// console.log(+"");

let num1, num2, num3;
num1 = num2 = num3 = 2 + 3

let gameCounter = 100
++gameCounter;
console.log(gameCounter);

let a = 4
const y = a++;
console.log(a, y);

let b = 4
const x = ++b;
console.log(b, x);