//comparisons...

console.log(2>1);          // returns true (boolean)        
console.log(2>=1);          // returns true (boolean)
console.log(2<1);           // returns false (boolean)
console.log(2<=1);           // returns false (boolean)
console.log(2==1);           // returns false (boolean)
console.log(2!=1);          // returns true (boolean)

console.log("2">1);           // true
console.log("02">1);          // true

console.log(null>0);         //0>0  false
console.log(null==0);        // false null != 0
console.log(null<0);         // flase 0 < 0
console.log(null<=0);
console.log(null>=0);        // true as 0  >= && <= 0

console.log(undefined == 0);          //flase
console.log(undefined < 0);          //flase
console.log(undefined > 0);          //flase
// the reason is that  equality check(==) and comparisons(<,>,<=,>=) work diffrently.
// comparison converts null to number , treating it as 0;
// That's why null >= 0 is true and null > 0 is false;

// === is used for strict check. (i.e. it's datatype is also checked.)

console.log("2" == 2);       //true
console.log("2" === 2);      //flase