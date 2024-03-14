//  Ways of declaring the arrays

const arry = [0, 1, 2, 4, 5]
console.log(arry);


const newArray = new Array(10, 20, 30, 40, 50)
console.log(newArray);

// Array Methods

// console.log(arry.length);  // 5
console.log(Array.isArray(newArray)); 
// console.log(newArray.push(90));
// console.log(newArray.pop());

console.log(newArray.unshift(3443)); // add the arg's value at the 0th position
// console.log(newArray.shift()); // remove the first index
// console.log(newArray); 
// .includes(x)
// .indexOf(a)

const joinedArry = newArray.join(); // converts into the string.
// console.log(joinedArry);
// console.log(typeof joinedArry);


// slice and splice --> major diff is that slice does not change the original array but splice does

const slicedArray = newArray.slice(1, 3); // 1 is inclusive and 3 is exclusive
console.log(slicedArray);
// console.log(newArray);

const spliceArray = newArray.splice(1, 3); // 1 is inclusive and 3 is inclusive
console.log(spliceArray);
console.log(newArray);