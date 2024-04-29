// singleton 
// jab bhi 'objects leterals' ka use kr k define krte hain toh singleton object nhi banta hai i.e. multiple instances ho sakte hain
// jab be constructor se object banta hai toh singleton hota hai.

const mySymbol = Symbol("key1")            // to use this symbol as an key in JsUser object.
const mySymbol2 = Symbol("key2")
// object leteral :
const JsUser = {
     name: "Nikhil",
     "full name": "Nikhil Soni",
     [mySymbol]: "myKey1",                   // here mysymbol is used as a symbol.
     mySymbol2 : "myKey2",                   // here mysymbol2 is used as a string.     
     age: 20,
     location : "Ghaziabad",
     isLoggedIn : false,
     lastLoginDays : ["Monday", "Sunday"]
}

// object construcrtor 
// Object.create()

// Method to access an Object.

console.log(JsUser);
console.log(JsUser.location);
console.log(JsUser["location"]);
// console.log(JsUser."full name");         // not possible to acces like this.
console.log(JsUser["full name"]);   

console.log(typeof JsUser.mySymbol);       // undefined
console.log(typeof JsUser.mySymbol2);      // string

// to access the symbol.

console.log(JsUser[mySymbol]);            // coz it's a symbol
console.log(JsUser.mySymbol2);            // coz its a string

// to cange value:
JsUser.name = "Vivek"

// to make the object immutable.
// Object.freeze(JsUser)
JsUser.name = "Nikhil"
console.log(JsUser);

//

JsUser.greeting = function(){
    console.log("Hello user!!!");
}

console.log(JsUser.greeting);        // function is not executed only it's refrence is returned back.

console.log(JsUser.greeting());      // Hello user!!!

JsUser.greetingTwo = function(){
    console.log(`Hello  ${this.name} !!!`);              // this => same object ko refrence krne k liye.
}

console.log(JsUser.greetingTwo());

