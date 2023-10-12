let score = "33abc";

// console.log(typeof score);
// console.log(typeof (score));

let valueInNum = Number(score);
// console.log(valueInNum);
// console.log(typeof valueInNum);


// true => 1; false => 0

// "33" => 33

// "33abc" => NaN (Not a number)
// "abc" => NaN
// undefined => NaN

// "" => 0
// null => 0


// TO check for boolean values
let booleanValue = 1
let isBooleanValue = Boolean(booleanValue);

console.log(isBooleanValue);

// 1 => true; 0 => false
// "" => false; "abc" => true   



// ********************* Operations ******************************

// + , - , * , / , % , **

// // Easy Operation

// console.log(2 + 3);

// // But the tricky part is this: 

// console.log("2" + 3);
// console.log(typeof ("2" + 3));

// console.log(2 + "3");
// console.log(typeof (2 + "3"));

// console.log("1" + 2 + 3); // if first one is strig then all will be string
// console.log(typeof ("1" + 2 + 3));

// console.log(1 + 2 + "3");  // first operations then do operations and then concatenation
// console.log(typeof (1 + 2 + "3"));


// // Tricy Operation
// console.log(+true); // 1
// console.log(+""); // 0


// // To Confuse
// let n1, n2, n3;

// n1 = n2 = n3 = 11 + 1;
// console.log(n1, n2, n3);

//Postfix and Prefix Increment Operations
let num1 = 5;
let num2 = 10;

// Postfix increment
console.log(num1++); // 5

// Prefix increment
console.log(++num1); // 7

// Postfix decrement
console.log(num2--); // 10

// Prefix decrement
console.log(--num2); // 8
