//if

const isLoggedIn = true;

if (isLoggedIn) {
    console.log("Logged In");    
}

if(2 === "2"){
    console.log("Executed ===");
}

if(2 == "2"){
    console.log("Executed == ");
}

if(2 != "2"){  //true
    console.log("Executed !="); 
}

if(2 !== "2"){
    console.log("Executed !==");   
}


// if... else

if(isLoggedIn){
    console.log("true");
}else{
    console.log("False");
}

// if... else if... else

const marks = 67

if(marks<33){
    console.log("Grade : Fail");
} else if(marks>33 && marks<=50){
    console.log("Grade : C");
} else if(marks>50 && marks<=75){
    console.log("Grade : B");
}else console.log("Grade : A");


//switch case


const month = 5
switch (month) {
    case 1: console.log("Jan");
        break;
    case 2: console.log("Feb");
        break;
    case 3: console.log("Mar");
        break;
    case 4: console.log("Apr");
        break;
    case 5: console.log("May");
        break;
    default: console.log("Not a valid month"); 
        break;
}


// if(value) => falsy values : false, 0, -0, null, undefined, BigInt 0n, NaN and "" .
// truthy value : "0","false", " ", [], {}, function(){}


// false == 0 , false == "" and 0 == '' => true

const emptyObj = {}

if(Object.keys(emptyObj).length == 0){
    console.log("Object is Empty");
}

// Nullish Coalescing Operator (??) : null undefined

let val1;
val1 = 5 ?? 10 ?? 15
console.log(val1);

let val2 = null ?? 10;
console.log(val2);

let val3 = null ?? undefined;
console.log(val3);

let val4 = undefined ?? 5;
console.log(val4);

// Terniary Operator : conditiom ? s1(T) : s2(F)

const marks2 = 50;

marks2 > 50 ? console.log("Pass") : console.log("Fail");




