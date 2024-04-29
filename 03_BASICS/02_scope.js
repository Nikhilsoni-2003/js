var c = 69                 // global scope
let a = 6969

if (true) {
    let a = 10             // block scope
    console.log("Inner : ", a);
    const b = 20
    var c = 30              // global
    d = 23
}

console.log("Outter : ",a)
//console.log(b);
console.log(c);   // o/p => 30
console.log(d);   // o/p => 23
