// Immediatly Invoked Function Expression (IIFE)

// used to deal with global-scope's pollution i.e. global scope k variables ya jo bhi declarations hain unhe hatane k liye use kiya jata hai

// stynax : ()()  1st() => defination & 2nd() => execution call

(function DBconnection(){
    console.log(`DB connected`);
})();

/* now this IIFE is invoked but isse ye nhi pta hai ki context rokna kaha hai toh next IIFE k execution k liye ; lga k context termination signify krna jaroori hai*/

( ()=> {
    console.log("DB connected 2")
})();

// IIFE with parameters :

( (name) => {
    console.log(`Welcome ${name}`);
})(`Nikhil !`);         

// 2nd () is for execution toh ussi me parameter pass kr sakte hain...  eg. 'Nikhil'.

// when we use traditional functions it is a named IFFE but when we use the arrow functions it is un-named IFFE.


 