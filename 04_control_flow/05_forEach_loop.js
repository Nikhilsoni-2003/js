const codingLanguages = ["JavaScript", "Python", "Java", "C++", "Go"];


codingLanguages.forEach( function (lang) {
    console.log(lang); 
} )

// kyuki callback fn. ja rha for each k andar , isiliye uska naam nhi hoga.

// syntax : codingLanguages.forEach( () => {} )

codingLanguages.forEach( (item) => {
    console.log(item);
} )

// it has more parameters like :

codingLanguages.forEach( (item,index,arr) => {
    console.log(item, index, arr);
} )


const sampleArray = [
  { id: 1, name: "Nikhil", role: "Developer" },
  { id: 2, name: "Ayan", role: "Designer" },
  { id: 3, name: "Tanish", role: "Tester" },
  { id: 4, name: "Vikas", role: "Manager" }
];

sampleArray.forEach( (obj) => {
    console.log(`${obj.name} is a ${obj.role}`);
} )





