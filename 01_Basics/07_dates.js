// Learnig about the Dates
// It outputs the time in ms, calculated from 1 Jan 1970 

const date = new Date();

console.log(date);

// Methods to read the dates more easily

// console.log(date.toString());
// console.log(date.toLocaleDateString());
// console.log(date.toLocaleTimeString());
// console.log(date.toDateString());
// console.log(date.toTimeString());

// ---------------------- IMP ----------------
console.log(typeof date); // object
// -----------------------------------------------
// Passing param to date object

// Months starts from 0
// const newDate = new Date(2002, 9, 13)
// console.log(newDate.toString());

const myBirthDate = new Date("10-13-2002")
console.log(myBirthDate.toString());


// ----------------------------Time Stamps--------------------------

const myTimeStamps = Date.now();
// console.log(myTimeStamps.toLocaleString()); // time in ms

// take time from specific date
// console.log(myBirthDate.getTime().toLocaleString());


// ---------------------------IMP---------------------------
// give the time in seconds
// console.log(Math.floor(myTimeStamps / 1000))

// ---------------------------Date Methods------------------------

// console.log(myBirthDate.getFullYear());
// console.log(myBirthDate.getDay());
// console.log(myBirthDate.getMonth() + 1);

// --------------------------- In High Uses
// can customize the format of localString acoordinly
myBirthDate.toLocaleString('default', { weekday: 'long' })