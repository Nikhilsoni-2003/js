const MarvelHeros = ['Thanos','QuickSilver','Wanda', 'BlackWiddow']
const DCHeros = ['Batman','Joker','Aquaman', "Superman"]

MarvelHeros.push(DCHeros)                       // pushes complete array within the array.

console.log(MarvelHeros);
console.log(MarvelHeros[4]);                   // [ 'Batman', 'Joker', 'Aquaman', 'Superman' ]
console.log(MarvelHeros[4][1]);                // Joker

MarvelHeros.pop()


// method to combine two array:

const AllHeros = MarvelHeros.concat(DCHeros)
console.log(AllHeros);                 // [ 'Thanos', 'QuickSilver','Wanda','BlackWiddow','Batman','Joker','Aquaman','Superman']

// Other method.

const AllHeros2 = [...MarvelHeros, ...DCHeros]   // ... is the spread operator (spresds the elements)
console.log(AllHeros2);                       // // [ 'Thanos', 'QuickSilver','Wanda','BlackWiddow','Batman','Joker','Aquaman','Superman']

// method to flaten an array.

const Arr4 = [1, 2, 3, [4, 5, 6,], 7, [6, 7, [6, 9] ] ]
const FlatArray = Arr4.flat(Infinity)                   // flat fun. has a parameter i.e. depth (kitni depth takk flat krna hai)
const FlatArray2 = Arr4.flat(1)
const FlatArray3 = Arr4.flat(2)


console.log(Arr4);
console.log(FlatArray);        // [1, 2, 3, 4, 5, 6, 7, 6, 7, 6, 9]
console.log(FlatArray2);       // [1, 2, 3, [4, 5, 6,], 7, [6, 7, 6, 9 ] ]
console.log(FlatArray3);       // [1, 2, 3, 4, 5, 6, 7, 6, 7, 6, 9]

// conversion to array.

console.log(Array.isArray("Nikhil"));                  // false
console.log(Array.from("Nikhil"));                     // [ 'N', 'i', 'k', 'h', 'i', 'l' ]
console.log(Array.from({
    name: "Nikhil"
}));                                                   // it can't directly convert an object into array, that's why returns an empty array.

let x =  "nikhil"
let y = 100
let z = false

console.log(Array.of(x,y,z));                          // [ 'nikhil', 100, false ]
