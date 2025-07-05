// conversions...

let score = 33;

console.log(typeof score);

score = "100";

console.log(typeof (score));

// To convert string into nubber.

let ValueInNubmer = Number(score)

console.log(typeof ValueInNubmer);


console.log("score_2 = 123abc");
let score_2 = "123abc";
let score_2ToNumber = Number(score_2);

console.log("Type of score_2 ",typeof(score_2));
console.log("Type of score_2ToNumber ", typeof score_2ToNumber);
console.log("Value of score_2ToNumber",score_2ToNumber);          // returns NaN (not a number).


let temp = null;

let temprature = Number(temp);

console.log(temprature);  // returns 0 i.e. converts null to 0 .

// "33" => 33
// "123abc" => NaN
//null => 0
// true => 1 and false => 0

let isLoggedIn = 1
let booleanIsLoggedIn = Boolean(isLoggedIn)
console.log(booleanIsLoggedIn);

//similarly
// "" => false    (emptyString)
// "Nikhil" => true     (nonEmptyString)

let emptystring = ""
let booleanEmptyString = Boolean(emptystring)
console.log(booleanEmptyString);


// number => string 

let num1 = 619;
let stringNum1 = String(num1)
console.log(stringNum1);          // returns string 619
console.log(typeof stringNum1);   // returns string

console.log(typeof NaN);          // number