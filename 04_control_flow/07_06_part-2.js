const nums = [1,2,3,4,5,6,7,8,9,10]

// map automatically return krta hai values ko.

let newNums = nums.map((num)=>num+10)


let newNums2 = []

nums.forEach((num)=>{
    newNums2.push(num*10)
})

console.log(newNums2);


/*NOTE : forEach kuch bhi return nhi krta h ... even if explicitly return kro tab bhi vo undefined hi rahega */

//eg:

let newNums3 = nums.forEach((num)=>{
    return num*10;
})

console.log(newNums3);   // undefined 


/* chaining */

const newNums4 = nums
                    .map((num)=>num*10)
                    .map((num)=>num+5)
                    .filter((num)=>num>=50)

console.log(newNums4);


/* Reduce {imp} */

const nums2 = [1,2,3,4,5]

// basic

const total = nums2.reduce(function (accumulator, currentValue) {
    console.log(`accumulator is ${accumulator} and current value is ${currentValue}`);
    return accumulator+currentValue;
},0)              // 0 is the start value of accumulator .

console.log(`Total : ${total}`);

// now using arrow functions :

const gst = 15
const totalWithGST = nums2.reduce((acc,currVal)=>{
    return acc + currVal
} , gst)           // gst acts as accumulator 
console.log(`Total inc. taxes is : ${totalWithGST}`);



const courses = [
  { name: "JavaScript Bootcamp", price: 999 },
  { name: "Python for Beginners", price: 799 },
  { name: "Full Stack Web Dev", price: 1499 },
  { name: "Data Structures in C++", price: 1299 },
  { name: "React JS Mastery", price: 1099 }
];

const cartTotal = courses.reduce((acc2,cartObj)=>{
    return cartObj.price + acc2
},0)

console.log(`Total price of courses is ${cartTotal}`);






