const codingLanguages = ["JavaScript", "Python", "Java", "C++", "Go"];

const values = codingLanguages.forEach((item)=>{
    console.log(item);
    return item
})

console.log(values);    // undefined (mtlb for each loop kuch retun nhi krta hai)



const nums = [1,2,3,4,5,6,7,8,9,10]

// const newNums = nums.filter((val)=> {
//     val>5
// })
// console.log(newNums);  // this gives undefined , kyuki kuch return hi nhi ho rha hai... it is same as return undefined and filter sirf truthy values ko store krta hai


// const newNums = nums.filter((val)=> {
//     return val>5
// })

// or 

const newNums = nums.filter((val) => val>5)
console.log(newNums);


const newNums2 = []

nums.forEach((num)=>{
    if(num<=5){
        newNums2.push(num)
    }
})
console.log(newNums2)

const books = [
  { id: 1, title: "The Alchemist", author: "Paulo Coelho", year: 1988 },
  { id: 2, title: "To Kill a Mockingbird", author: "Harper Lee", year: 1960 },
  { id: 3, title: "1984", author: "George Orwell", year: 1949 },
  { id: 4, title: "Harry Potter", author: "J.K. Rowling", year: 1997 },
  { id: 5, title: "The Great Gatsby", author: "F. Scott Fitzgerald", year: 1925 },
  { id: 6, title: "Pride and Prejudice", author: "Jane Austen", year: 1813 },
  { id: 7, title: "The Hobbit", author: "J.R.R. Tolkien", year: 1937 },
  { id: 8, title: "The Da Vinci Code", author: "Dan Brown", year: 2003 },
  { id: 9, title: "The Catcher in the Rye", author: "J.D. Salinger", year: 1951 },
  { id: 10, title: "The Power of Now", author: "Eckhart Tolle", year: 1997 }
];

let newBooks = books.filter((bookObj)=>{
    return bookObj.year>1990
})

newBooks = books.filter((bookObj)=>{
    return bookObj.id>5 && bookObj.year>1980
})
console.log(newBooks);











