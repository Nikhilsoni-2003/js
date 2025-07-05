function sayMyName(){
  console.log("N");
  console.log("i");
  console.log("k");
  console.log("h");
  console.log("i");
  console.log("l");
}

// sayMyName()

function addTwoNumbers( num1 , num2 ){
  console.log(num1 + num2);
}

addTwoNumbers(3,4)            // 7
addTwoNumbers(3,'4')          // 34

// defination => parameters
// call   =>     arguments

const result = function addTwoNumbers( num1 , num2 ){
  console.log(num1 + num2);
}

console.log("Result : ", result);         //  Result :  [Function: addTwoNumbers]

const result2 = addTwoNumbers(2,8)
console.log("Result : ",result2);        // Result :  undefined 

function returnSum(num1,num2){
  let result = num1 + num2;
  // return result
  return num1 + num2;
  console.log("Nikhil");       // unreachable code. function return statement encounter krne k baad kuch bhi nhi execute krega...
}

const result3 = returnSum(4,11)
console.log('Result : ',result3);      // 15

function loginUserMessage(username="Sam"){         // Sam acts as default value ... if actual arguments are passed the it's over written.
  if(username == undefined || !username){         // !username = !"" = !undefined = !false = true
    console.log("please enter a username");
    return
  }
  return `${username} just logged in!`
}

console.log(loginUserMessage("Nikhil"));
console.log(loginUserMessage());        // undefined just logged in!


function calculateCartPrice( ... num1){           // ... = rest and spread operator (here rest)
  return num1
}

console.log(calculateCartPrice(200,3834,234,325,235,36,456,233,634,634,74,23));       // returns array => [200,3834,234,325,235,36,456,233,634,634,74,23]

function sum1(val1, val2, ...nums){
  return nums;
}

console.log(sum1(10,20,30,40,50));    // [30,40,50] 10,20 goes to val1 and val2 and rest goes to nums array.

const book ={
  bookname : "Song of ice and fire",
  price : 1299
}

function handleObject(anyObject){
  console.log(`Book is ${anyObject.bookname} and it's price is ${anyObject.price} rupees.`);
}


// Handle objects within a fuction.


handleObject(book)
handleObject({
  bookname : "Maths NCERT",
  price: 145
})

// array in a function.

const myNewArray = [10,20,30,40,50]

function returnThirdValue(getArray){
  return getArray[2]
}

console.log(returnThirdValue(myNewArray));
