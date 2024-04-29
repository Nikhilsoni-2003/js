// Arrays

const myArray = [ 0, 1, 2, 3, 4, 5]
const myArray2 = new Array("Nikhil", "Soni")
console.log(myArray2[1]);

// Array methods.

myArray.push(6)
myArray.push(7)
myArray.pop()      // Deletes the laast value;
myArray.unshift(9)       // Adds the elem in the beg.
myArray.shift()       // Removes the elem in the beg. no parameter needed but if entered the the shift fn. ignores it;
console.log(myArray);

console.log(myArray.includes(5));         // returns true or false.
console.log(myArray.indexOf(3));           // returns index and -1 if elem not found.

const newArr = myArray.join()            // joins all the elements sep. by comma & returns string
console.log(typeof newArr);
console.log(newArr);                      // o/p => 0,1,2,3,4,5,6

// slice v.s. splice :

console.log("Orignal Array",myArray,'\n');
const Arr2 = myArray.slice(1,3)                                     // doesn't inc. the upper val. of range.
console.log(Arr2,'\n');            // o/p => [ 1, 2, ]
console.log("Original Array After Slice : ", myArray ,'\n');
const Arr3 = myArray.splice(1,3)                                    // alters the origina array and removes those elements from the original array.
                                                                    // includes the upper value of the given range. 
console.log(Arr3 ,'\n');           // o/p => [ 1, 2, 3 ]
console.log("Original Array After Splice : ", myArray ,'\n');

