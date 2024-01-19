// Problem: have 2 array, and want to merge them.

const marvel_hero = ['IronMan', 'Thor', 'Hulk'];
const dc_hero = ['Batman', 'Superman', 'Aquaman'];

//1. using push
// add the dc_hero to marvel_hero as a entire array
// marvel_hero.push(dc_hero);
// console.log(marvel_hero); //[ 'IronMan', 'Thor', 'Hulk', [ 'Batman', 'Superman', 'Aquaman' ] ]


//2. using concat
// add properly but return into complete new array

// const allHeros = marvel_hero.concat(dc_hero);
// console.log(allHeros); //[ 'IronMan', 'Thor', 'Hulk', 'Batman', 'Superman', 'Aquaman' ]


//3. using spread operator
// add properly but return into complete new array and most commonly used

// const allHeros = [...marvel_hero, ...dc_hero];
// console.log(allHeros); //[ 'IronMan', 'Thor', 'Hulk', 'Batman', 'Superman', 'Aquaman' ]

// Problem 2: have nested array and want to convert into one.

const nestedArray = [1, 2, 3, [4, 5, 6, [7, 8, 9]]];
console.log(nestedArray.flat(Infinity)); //[ 1, 2, 3, 4, 5, 6, 7, 8, 9]

// Problem 3: of, from, isArray

const a = 10
const b = 20

const c = Array.of(a, b);
console.log(c); //[ 10, 20 ]


console.log(Array.from('Pranav')); //[ 'P', 'r', 'a', 'n', 'a', 'v' ]
console.log(Array.isArray('Pranav')); //false

//intersting
console.log(Array.from({ name: "Pranav" })); //  it will return empty array, need to clarify what to convert into the array.