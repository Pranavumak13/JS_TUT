// falsy values
// false,
// 0,
// -0,
// BigInt 0n,
// "",
// null,
// undefined,
// NaN

// // truthy values
// "0"
// "false"
// " "
// []
// {}
// function(){}


// how to check wheather an object is empty or not
const emptyObj = {}

if(Object.keys(emptyObj).length === 0){
    console.log("Yes it is empty")
}else{
    console.log("No");
}

// interview questions
false == 0 // true
false == '' // true
0 == '' //true


// Nullish Coalescing Operator (??) : null undefined
// it is used for error handling

let val1;
// val1 = 5 ?? 10 //5
// val1 = null ?? 10 // 10
// val1 = undefined ?? 32
// val1 = null ?? undefined // undefined
// val1 = null ?? 2130 ?? 220

console.log(val1);


// Ternary Operator ?:

// condition ? true : false

const iceTeaPrice = 100
iceTeaPrice <= 80 ? console.log("less than 80") : console.log("more than 80")