/*
We got ES6 in 2015
one of the main features are: ARROW Funtions
"this keyword"

*/


const user = {
    username:"Pranav",
    price:100,
    
    welcomeMesg: function(){
        console.log(`${this.username} is welcomed`)
        // console.log(this) // Outputs the object
    },
}
user.welcomeMesg() // if same context is used then it will print defalut value | Pranav is welcomed

//if context(value) is chnaged then it will use that one
user.username = "Arhant"

user.welcomeMesg() // Arhant is welcomed

// ------------- Intersting Facts ------------------------
/*
What is the value of 'this' inside the function, globally ?, globally but in Browser's COnsole

1. in the function: it outputs the current context 
2. globally: {} empty object if its a node environment 
3. globally but in Browser's COnsole: {Window} Object, all things related to DOM
 
*/

console.log(this);// {}


// this inside the function not object

function temp(){
    // console.log(this); // empty function outputs some default values

    let course = "B.Tech"
    console.log(this.course); // undefined | this inside of funtion is undefined, but outputs inside the object
}

temp()


const tempWithArrow = () => {
    let course = "B.Tech"
    console.log(this.course);  // undefined only
}

tempWithArrow()

// Arrow Functions

// .. Syntax: () => {}

const add2Num = (num1,num2) => {
    return num1+num2
}

console.log(add2Num(3,4));

// 2nd type of JS: IMPLICIT RETURN

const add2Numbers = (num1, num2) => num1+num2
console.log(add2Numbers(2,3));

// 3rd type 
const addTwoNumbers = (num1, num2) => (num1+num2)
console.log(addTwoNumbers(2,1));

// trick:
// if {} then use return keyword
// if () or no () then dont use return.

// if returntype is the Object Not the value
const returnObj = () => ({name:"Pranav"})
console.log(returnObj());


const myAry = [3,5,6,73,3]

let i=0;
myAry.forEach(()=>{
    console.log(myAry[i]);
    i++
})