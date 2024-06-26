// Func --> reference of func
// Func() --> execution of func

// WAP to add two numbers using function.

function add(a, b) {
    if (typeof a === 'number' && typeof b === 'number')
        return a + b;
    else
        return "Error"
}

const sum = add("13", 4); //error
// console.log(sum);         
const sum1 = add(13, 4); //17
// console.log(sum1);         


// WAP to notify weather the user have logged in or not logged

function isLoggedIn(username) {
    if (!username) {
        console.log("Please enter a username");
        return;
    }
    return (`${username}, has just logged in.`);
}

const alert = isLoggedIn("Pranav")
console.log(alert);


// Problem: A situation where how many arguments are there is not known 
function calculateCartPrice(...num1) {
    return num1;
}


console.log(calculateCartPrice(100, 2, 43, 56, 34));
// num1 return the array holding all the values that has been passed.

function calculateCartPriceExceptFor2Values(val1, val2, ...num1) {
    return num1;
}
console.log(calculateCartPriceExceptFor2Values(100, 2, 43, 56, 34));
// here only last three values, cause val1 takes 100 and val2 - 2;


// Problem : Passing object as a parameter

function passObjAsPara(anyObject) {
    console.log(`ID ${anyObject.id} has name as ${anyObject.name}`);
}

//1
const myObj = {
    id: 1,
    name: "Doreamon",
}
passObjAsPara(myObj);


// 2
// direct passing as a parameter
passObjAsPara({
    id:2,
    name:"Harry Potter and the Secreats of Azkaban"
})


//3
//Passing Array as a Parameter.
function passArrayAsPara(anyArray){
    for(let i in anyArray){
        console.log(anyArray[i]);
    }
}

// by passing arry as arg
const myArray = [19,29,39,49]
passArrayAsPara(myArray);

// directly
passArrayAsPara([
    1,2,3,4
])