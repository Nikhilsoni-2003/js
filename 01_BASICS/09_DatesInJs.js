//Dates...
let myDate = new Date()
console.log(myDate);
console.log(myDate.toString());                  // Wed Jun 26 2024 14:30:00 GMT+0000 (Coordinated Universal Time)
console.log(myDate.toDateString());              // Sun Dec 31 2023
console.log(myDate.toISOString());
console.log(myDate.toJSON());
console.log(myDate.toLocaleString());           // 31/12/2023, 3:27:29 am
console.log(myDate.toLocaleTimeString());
console.log(myDate.toLocaleDateString());

console.log(typeof myDate);                     // object.

let myCreatedDate = new Date(2023, 11, 31)                    //Sun Dec 31 2023         (js me months 0 se start hote hain)
console.log(myCreatedDate.toDateString());
console.log(myCreatedDate.toLocaleString());                  // 31/12/2023, 12:00:00 am

let newDate = new Date(2023, 11, 31, 3, 32)                       // 3 and 32 represent time 3:32
console.log(newDate.toLocaleString());                            // 12/31/2023, 3:32:00 AM

let date2  = new Date("2023-12-31");     // yyyy-mm-dd
console.log(date2.toLocaleString());

let date3  = new Date("12-31-2023");      // mm-dd-yyyy
console.log(date3.toLocaleString());

let myTimeStamp = Date.now()
console.log(myTimeStamp);                 // 1703974261436 ms from 01-01-1970  as per std. 
console.log(myCreatedDate.getTime());      // 1703961000000 ms

// to get in seconds.
console.log(Math.floor(Date.now()/1000));    // 1703974596 secs from 1970 jan 1st.


let date4 = new Date()
console.log(date4.getDate());
console.log(date4.getDay());
console.log(date4.getFullYear());
console.log(date4.getMonth() + 1);       // coz dec is 11th month


// to customise locale string object.

console.log(
    newDate.toLocaleString('default', {
    // weekday: "long",
    // day: "2-digit",                                       // ctrl + shift for suggetions. (^_^)
    // dateStyle: "long",
    hourCycle: "h24",
    timeStyle: "full",
})
);















