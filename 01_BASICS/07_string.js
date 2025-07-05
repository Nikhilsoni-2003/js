// String inter-polation 

const name = "Nikhil"
const repoCount = 1
console.log(`Hello my name is ${name} and my repo count is ${repoCount}.`);

// another way of string declaration.

const repoName = new String('javaScript')    // run this in console to see all it's methods in prototype and its length.
console.log(repoName);
console.log(repoName[4]);     //  o/p => S
// to access prototype:
console.log(repoName.__proto__);            // returns an object that seems to be empty but is not and easiest way to access the object is to run this in console. 

console.log(repoName.length);
console.log(repoName.toLowerCase());
console.log(repoName.toUpperCase());       // original repoName is not changed b'coz string is stored in stack memory. 
console.log(repoName);
console.log(repoName.charAt(0));           // o/p => j
console.log(repoName.indexOf('t'));

const str1 = repoName.substring(0,4)          //java
const str2 = repoName.substring(4,10)         // Script
const str3 = str1 + str2
console.log(`${str1} \n ${str2} \n ${str3}`);

const str4 = repoName.slice(-10,8)          // o/p => 'javaScri' 
console.log(str4);

const str5 = "    Nikhil   \n";
console.log(str5);
console.log(str5.trimStart());
console.log(str5.trimEnd());
console.log(str5.trim());

const url = "https://nikhil.com/nikhil%20soni"
console.log(url.replace("%20",'-'));                    // o/p => https://nikhil.com/nikhil-soni
console.log(url.includes('nikhil'));                    // o/p => true

// string to array.
console.log(url.split('/'));                            // o/p => [ 'https:', '', 'nikhil.com', 'nikhil%20soni' ]

url.match(/* regex */)

const myName = new String('Nikhil')

console.log(myName.indexOf('i'));    // 1st index where i is encountered. i.e. 1 


