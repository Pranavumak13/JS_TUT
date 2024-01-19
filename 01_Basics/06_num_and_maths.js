const num = 100.00;

// console.log(typeof (num));

const balance = new Number(1030333)

// console.log(typeof (balance));
// console.log(((balance).toString()).length);

// console.log(balance.toFixed(2));

const numNums = 23.93566
// console.log(numNums.toPrecision(2));


const bigNum = 10000
console.log(bigNum.toLocaleString());


// --------------- Maths ------------------------------

console.log(Math)

// .abs(), .round(), .min(), .max, .ceil(), .floor(), .sqrt(), .pow(), .random(),


// console.log(Math.random());
// console.log(Math.ceil(Math.random()));
// console.log(Math.round(Math.random() * 100));

// Chai and code formula
// I want the range between 10 and 20
min = 10;
max = 20;

console.log(Math.random() * (max - min));
console.log(Math.random() * (max - min) + min);
console.log(Math.round((Math.random() * (max - min + 1)) + min));