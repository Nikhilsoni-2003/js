// Operations..

let val = 69
let negVal = -val
// console.log(negVal)

//basic operations
console.log(2+2);
console.log(2-2);
console.log(2*2);
console.log(3**2);   //power
console.log(2/2);
console.log(11%4);


let str1 = "Nikhil " 
let str2 = "Soni"
console.log(str1 + str2);

//ambiguous case...
console.log('1' + 1);
console.log(6+"9");
console.log("61"+"9");       // o/p => string in all case...

//more...
console.log("6"+1+9);       // o/p => "619"
console.log(6+1+"9");      //  o/p => "79"

console.log(+true);        //  o/p => 1

console.log(+"");          //  o/p => 0

// priority of  = is more that ++ operator 
let x = 9
const y = ++x;
console.log("x:",x, "y:",y);

let a = 9;
const b = ++a;
console.log(`a:${a}, b:${b}`); 
console.log("a:",a, "b:",b);

let z = Number(true);

console.log(++z);  // 2