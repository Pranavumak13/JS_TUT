const name = "Pranav"
const Marks = 100;

// console.log(name + " has " + Marks + " marks in the exam") // old way of writing this

// but now a days we use backticks
console.log(`${name} has ${Marks} marks in the exam`);


// string declarations
const Name = "Pranav"; // one way
const newName = new String("Pranav Umak") // another way

console.log(typeof newName); // object
console.log(newName.__proto__); // to check the prototype of the string 

// newName has many default funtions with it
// like
console.log(newName.length);
console.log(newName.toLowerCase());
console.log(newName.toUpperCase());
console.log(newName.charAt(10));
console.log(newName.indexOf('a'));
console.log(newName.substring(0, 5));
console.log(newName.slice(-11, 2));  // the negative counting starts from initial index only for eg index[0] == index[-11], index[1] == index[-10]

// replace and trim
const newObjectString = new String("       Pranav   Umak        jhndflkhasd");
console.log(newObjectString.trim()); // trim only removes to the whitespaces eg \n , intial and end space
console.log(newName.replace(' ', '-'));

// replace is used to decode the URL

const url = "http//:www.insdnanded.com/about%20us";
console.log(url.replace('%20', '-'))
console.log(url.includes('insd'));

// split 
// converting into an ARRAY

console.log(newName.split(' '));
