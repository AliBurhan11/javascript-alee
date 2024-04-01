const name = "alee"
const repoCount = 2
// console.log(name, + repoCount + " value");  : outdated

// modern way : backticks (` `): string interpolation

// console.log(`Hello my name is ${name} and my repo count is ${repoCount}`);
// console.log(`Hello my name is ${name.To} and my repo count is ${repoCount.toString}`)

// another way to define a string is :

const gameName = new String('alee-B')
// console.log(gameName);
// console.log(gameName[0]);
// console.log(gameName.__proto__);
// console.log(gameName.length);
// console.log(gameName.toUpperCase());
// console.log(gameName.charAt(3));
// console.log(gameName.indexOf('B'));
const newString = gameName.substring(3 , 5)
console.log(newString);

const anotherString = gameName.slice(-3 , 5)
console.log(anotherString);

const newStringOne = "    Alee    "
console.log(newStringOne);
console.log(newStringOne.trim());
// trimStart and trimEnd

// here %20 means if one has given space in between and browser dosnt support this and automatically changes it to %age
const url = "https://alee-b.com/alee%20home"
console.log(url.replace('%20', '-'))
console.log(url.includes('alee'));
console.log(gameName.split('-'))