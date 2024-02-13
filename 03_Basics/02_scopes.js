// let, var, const

// var -> dont use this.
// let -> have a block scope
// const -> bestttttt.

// scopes --> local and block scope

// Nice example

function Parent() {
    const username = "Pranav Umak";

    function Child() {
        const website = "Hello";
        console.log(username);
    }
    // console.log(website);
    Child();
}

Parent();



/// second example --------------------------------------------------------------

if (true) {
    const username = "Pranav Umak";
    if (username === "Pranav Umak") {
        const website = "Youtube";
        console.log(username + website);
    }
    // console.log(website); // 1st error cant access website
}

// console.log(username); // 2nd error, cant access the username 


// ---------- intersting --------------------------------------------------------

function addOne(num) {
    return num + 1;
}

console.log(addOne(5));


// 2nd way of declaration is


const addTwo = function (num) {
    return num + 2;
}

console.log(addTwo(5));


// hoisting concept

console.log(func1(5));

function func1(num) {
    return num + 1;
}

console.log(func2(5)); // doesnot allow before intiialization
// const hoisting
const func2 = function (num) {
    return num + 2;
}
