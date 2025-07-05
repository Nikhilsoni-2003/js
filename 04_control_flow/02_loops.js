// for loop

for (let i = 0; i < 10; i++) {
      console.log(i+1);      
}

// To log all the values in 1 line.

for (let i = 0; i < 10; i++) {
  process.stdout.write((i + 1) + " ");
} 

// process.stdout.write("Nikhil")  // by default line change nhi hoti hai.

let res =[]
for(let i = 0; i < 10; i++){
    res.push(i+1);
}
console.log(`\n${res.join(' ')}`);

for (let i = 0; i < 10; i++) {
    const element = i;
    if (i==5) {
        continue;       
    } else {
        process.stdout.write(`${i+1} `)
    } 
}
console.log();


// for(let i = 1; i<=10; i++){
//     console.log("Table of "+ i);
//     for(let j = 1; j <= 10; j++){
//         console.log(`${i} * ${j} = `,i*j);
//     }
// }

// while loop

let  index = 2

while(index<11){
    console.log(`value of index is ${index}`);
    index+=2
}

let myArr = [1,2,3,4,5,6,7,8,9,10]

let i = 0
while(i<myArr.length){
    console.log(i+1);
    i++
}

// do ... while loop

let score = 11

do {
    console.log(`score is ${score}`);
    score++
} while (score < 10);

