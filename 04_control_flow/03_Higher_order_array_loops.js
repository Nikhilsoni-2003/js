// for of loop

let myArr = [1,2,3,4,5,6,7,8,9,10]

for (const num of myArr) {
    process.stdout.write(`${num} `)
}   

console.log();

const name = "NIKHIL SONI"
for (const char of name) {
    if(char == " "){
        continue
    }else{
        console.log(char);
    }
}


// Maps 

const map = new Map()
map.set('IN','India')
map.set('NEP', 'Nepal')
map.set('FR', 'France')
map.set('IN','India')

console.log(map);

for (const [key,value] of map) {
    console.log(`${key} : ${value}`);
}


// const myObj ={
//     'Game-1' : "COD",
//     'Game-2' : "DOTA-2"
// }

// for (const [Game,GameName] of myObj) {
//     console.log(`${myObj.Game} => ${myObj.GameName}`);
    
// }

/* NOTE : Objects and Maps are not iterable using for of loop. */

// To iterate through object we use the for... in loop.
//[ val1, val2] = array destructurig syntax, won't work for objects.


const myObj ={
    'Game-1' : "COD",
    'Game-2' : "DOTA-2",
    password : "xyz"
}

for (const key in myObj) {
    console.log(`${key} => ${myObj[key]}`); 
    // console.log(`${key} => ${myObj.key}`);   // ${myObj.key} => undefined  ( looks for key(xyz) not 'Game-1 and Game-2' )
}

// for in loop for arrays

for (const key in myArr) {
    console.log(key);
    console.log(`${key} : ${myArr[key]}`);
}

// for of loop => directly values utha leat hai.
// for in loop => keys uthata hai.

// maps iteratable nhi hai toh uspe loop nhi lagega , except for... of loop.

