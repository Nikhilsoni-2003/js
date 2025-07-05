// 'use strict';

var c = 69                 // global scope
let a = 6969

if (true) {
    let a = 10             // block scope
    console.log("Inner : ", a);
    const b = 20
    c = 30              // global
    d = 23              // becomes a global variable if no declaration and no strict mode; but agar strict mode hota toh referene error dega  (ReferenceError: d is not defined).

}

console.log("Outter : ",a)    //console.log(b);
console.log(c);               // o/p => 30  
console.log(d);               // o/p => 23


//.............


function one(){
    const username = "Nikhil"

    function two(){
        const website = "javaScript"
        console.log(username);
    }

    // console.log(website);        // error : website is not defined.
    
    two()
}

one()


/* multiple ways of declaring a function */

console.log(addOne(5));               // no error in accessing the addOne function before its declaration.

//method-1
function addOne(num){
    num++;
    return num;
}

// console.log(addTwo(5));        // error : Cannot access 'addTwo' before initialization; as now the function is stored in the variable;

//method-2
const addTwo = function(num){
    return num+2;
} 

console.log(addTwo(5));

