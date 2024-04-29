const accountId = 12345
let accountEmail = 'nikhilsoni21@gmail.com'
var acc_Pass = "nik_123"
accountCity = "Prayagraj"

// accountId = 2     not allowed 

accountEmail = 'niksoni2112@hex.com'

acc_Pass = '12344321'

console.log(accountId);
console.log(acc_Pass);
console.log(accountEmail);
console.log(accountCity);

accountCity='Manikpur'

let acc_state;

let x=null;

//method to log multiple variables :

console.table([accountId, accountEmail, acc_Pass, accountCity, acc_state, x])

/*
Preffer not to use var for defining a variable 
because it causes issue in block scope and functional scope.
*/

// if we don't initialise any declared variable the js marks it as undefined.


