// -------- Ways of Declaring the Objects

//1.singleton object --> using constructor
// Object.create()


//2. Object Literals --> using curly braces
const JSuser = {
    name: "Pranav",
    "full name": "Pranav Umak",
    age: 18,
    location: "Jaipur",
    isLoggedin: false,
    lastLoginDays: ["Monday", "Tuesday", "Saturday"]
}


// -------- ways to assess the key and value.

// 1 using dot
// console.log(JSuser.name);
// console.log(JSuser.full_name); // can't access the key with the space in it.

// 2 using sqaure bracket and quotes
// console.log(JSuser["full name"]); // can access the key with the space in it.



// -------- Using Objects and Symbols

const mySymbol = Symbol("Hello I am Symbol")


const symObj = {
    // mySymbol: "Hello", --> acts as a normal string key-value pair.
    // mind the syntax here
    [mySymbol]: "Hi"  // Symbol.
}

// console.log(symObj.mySymbol); --> wrong
// console.log(symObj[mySymbol]); --> correct


// -------- Freeze the object
// Object.freeze(JSuser);
// JSuser.name = "Harry Potter"
// console.log(JSuser);

// function and object

JSuser.sayHello = function () {
    console.log("Hello");
}

JSuser.sayHello2 = function () {
    console.log(`Hello Guys, I am ${this.name}`);
}

console.log(JSuser.sayHello());
console.log(JSuser.sayHello2());
