// types of datatypes (how you can call a variable, number[data] from the memory) with value or reference 
// based on that there are two types of datatypes 1 - primitive, 2 - nonPrimitive (reference type)

// Primitve datatypes
// 7 types : string, number, boolean, null, undefined, bigInt, Symbol.

const score = 100
const scoreValue = 100.3
const isLoggedin = false
const outsideTemp = null
let userEmail;

const id = Symbol('123')
const anotherId = Symbol('123')
// console.log(id, anotherId);
// console.log(id == anotherId);

const bigNumber = 743975992749742422724n
// console.log(bigNumber);


// non primitive : arrays, objects, function.

// arrays:
const heros = ["sup", "man", "bad" ];

// Objects:
let myObj = {
    name : "alee",
    age : 20
}

// functions: function(){}
const myFunction = function(){
    console.log("hellow world");
}

// console.log(typeof myFunction);
// console.log(typeof heros);
// console.log(typeof myObj);
// console.log(typeof bigNumber);
// console.log(typeof id);
// console.log(typeof outsideTemp);
// console.log(typeof userEmail);
// console.log(typeof isLoggedin);
// console.log(typeof scoreValue);


// note if you want to master javascript master objects and browserEvents or webEvents.

// javascript is dynamically typed language

// ++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++

// stack memory (primitive) and heap memory (nonPrimitive)

let myYoutubeName = "HowzSo"
let anothername = myYoutubeName
anothername = "HowAmazing"
// console.log(anothername);
// console.log(myYoutubeName);

let userOne = {
    email: "user@email.com",
    upi: "user@ybl"
}

let userTwo = userOne

userTwo.email = "alee@gamil.com"

console.log(userOne.email);
console.log(userTwo.email);