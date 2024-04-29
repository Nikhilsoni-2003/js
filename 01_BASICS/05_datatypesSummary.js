/*Datatypes : 1. Primitive    2. Non primitive 

Primitive (call by value)
7 types : String , Number , Boolean , null , undefined , Symbol , BigInt

Non Primitive (call by reference)
Array, Objects, Functions

JavaScript id dynamically typed language not statically i.e. variable type is autometically assigned and may be unknown till compile Time. */

//use of Symbol:

const id = Symbol('123')                 //returns datatype Symbol always unique
const anotherId = Symbol('123')
console.log(id === anotherId);           // false      
console.log(id == anotherId);           // false      

// How to use big int => add n at last

const bigInt = 989898989899999488858495495995n


//// non primitive

//Array
const names = ["Nikhil", "soni", "Ram", "Shyam"];

//object => {...}
let myObj = {
    name : "Nikhil",
    age : 20,
}

//Functions
const sayHello = function(){
    console.log("Hello");
}


// All non primitive datatypes return type is object. 

console.log(typeof sayHello);   // function or object-function 