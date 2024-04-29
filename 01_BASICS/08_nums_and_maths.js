const balance = new Number(976)
console.log(balance);
console.log(balance.toString(),'\n',typeof(balance));       // object type
console.log(balance.toString().length);
console.log(balance.toFixed(3));                           // 976.000

const rate = 97.9876
console.log(rate.toPrecision(2));          // o/p => 98
console.log(rate.toPrecision(1));          // o/p => 1e+2
console.log(rate.toPrecision(3));          // o/p => 98.0
console.log(rate.toPrecision(4));          // o/p => 97.99      

const hundreds = 1000000
console.log(hundreds.toLocaleString('en-US'));                // o/p => 1,000,000
console.log(hundreds.toLocaleString('en-in'));                // o/p => 10,00,000
console.log(hundreds);

// const MAX_VALUE = Number.MAX_VALUE;
console.log(Number.MAX_VALUE);


// ============================== Maths ===============================

console.log(Math);
console.log(Math.abs(-4));                     // o/p => 4
console.log(Math.round(4.5));                  // o/p => 5
console.log(Math.ceil(-4.2));                  // o/p => -4
console.log(Math.ceil(4.2));                   // o/p => 5
console.log(Math.floor(-4.9));                 // o/p => -5
console.log(Math.max(2,3,5,7,1));
console.log(Math.min(2,3,5,7,1));

// to generate random number.

console.log(Math.random());                // o/p between 0 and 1 ; absolute 0 and 1 not included.
console.log((Math.random()*10));           // o/p between 0 to 10
console.log((Math.random()*10) + 1);       // o/p between 1 to 10 wth decimals 
console.log((Math.floor(Math.random()*10)) + 1);       // o/p between 1 to 10 integers

// to generate random number between 1 to 6

const min = 1
const max = 6

console.log(Math.floor(Math.random() * (max - min + 1)) + min);            // o/p between 1 and 6

// to generate random numbers between 10 and 20 both inclusive.
const min2 = 10
const max2 = 20

console.log(Math.floor(Math.random() * (max2 - min2 + 1)) + min2);            // o/p between 10 and 20
