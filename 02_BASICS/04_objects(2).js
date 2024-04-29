// const IGUser = new Object() // Singleton object 

const IGUser = {}   // non-singleton object.

IGUser.id = "001"
IGUser.name = "Chris Aceto"
IGUser.isLoggedIn = false

console.log(IGUser);

const regularUser = {
    email: "user@kiet.edu",
    fullname: {
        userfullname : {
            fristname: "Hunter",
            lastname: "Labarada"
        }
    }
}

console.log(regularUser.fullname.userfullname.fristname);

// combine two object.

const obj1 = { 1:"a", 2:"b", 3:"c" }
const obj2 = { 4:"d", 5:"e", 6:"f", 7:"g" }

const obj3 = { obj1 , obj2 }
console.log(obj3);

const obj4 = Object.assign({}, obj1, obj2)            // syntax = object.assign( {target} , sourses ) 
console.log(obj4);

const obj5 = { ...obj1, ...obj2 }                    // spread operator
console.log(obj5);

// array of objects.

const users = [
    user1={
        name: "NIKHIL",
        age: 20
    },
    user2={
        name: "RAM",
        age: 22
    },
    user3={
        name: "SHYAM",
        age: 69
    }
]

console.log(users[2].name);

// To get keys of any object in the form of array.

console.log(Object.keys(regularUser.fullname.userfullname));
console.log(Object.keys(IGUser));
console.log(Object.values(IGUser));
console.log(Object.entries(IGUser));   // [ [ 'id', '001' ], [ 'name', 'Chris Aceto' ], [ 'isLoggedIn', false ] ]

// console.log(object.keys(users[2]));   // why not working???

console.log(IGUser.hasOwnProperty('isLoggedIn'));    // true

// method to de-structure a value.
// {} are used for de-structuring.


const course = {
    courseName : "javascript",
    price: 9999,
    courseInstructor: "Nikhil"
}

const {courseInstructor : instructor} = course
const {price} = course
console.log(price);             //9999
console.log(instructor);        // Nikhil


// JSON
/*


{
    "name": "Nikhil",
    "coursename": "javascript",
    "price": "Free"
}

*/