/*
Memory : Stack and Heap

Primitive datatypes => Stack Memory
Non-Primitive datatypes => Heap Memory

when anything is stored in stack then, we get a copy of it (call by value)
and
when anything is stored in Heap then, we get a refrence of it (call by refrence) 


*/

//stack memory...

let myName = "Nikhil"
let anotherName = myName    // we get a copy of myName.
anotherName = "Vivek"         // now we are applying changes on the copy of my name, not on the original value.

console.log(`${myName} \n ${anotherName}`)


// heap memory...

let userOne = {
    name : "Nikhil",
    email: "nikhil4238@gmail.com",
    age: 20
}

let userTwo = userOne
userTwo.name = "Vivek"

console.log(userOne.name);
console.log(userTwo.name);

// As both usserOne and userTwo are reffering to same object in the heap.