const user = {
    username : "Nikhil",
    age : 22,

     welcomeMwssage : function(){
         console.log(`${this.username}, welcome to the website.`)
        
         console.log(this);    
        
     }
 }

user.welcomeMwssage()
user.username = "Vivek"
user.welcomeMwssage()

console.log(this);           // reffers to the global object ; here in thr node env. it is a empty object but in case of the console(within browser) it return the global object i.e. window object in that case.

const one = function one(){
    let name = "Nikhil"
    console.log(this);
    // console.log(this.name);     
          // undefined. // this context works only in case of the objects not in case of functions.
}
one()


/* Arrow Function */

const Arrow = () => {
    let name = "Nikhil"
    console.log(this.name);          // again undefined.
    
}
Arrow()

// const addTwoNum = (num1, num2) => {
//     return num1 + num2
// }

/* implecit Arrow function */

// const addTwoNum = (num1, num2) => num1+num2
//or
const addTwoNum = (num1, num2) => (num1+num2)
//function me single statement ho toh {} and return keyword ki jaroorat nhi hai.

console.log(addTwoNum(5,5));

// in-case object retun krna ho toh:

const dict = () => ({w1:"m1"})  // obj return krna ho toh usse () wrap krna jarrori hai.
console.log(dict());


