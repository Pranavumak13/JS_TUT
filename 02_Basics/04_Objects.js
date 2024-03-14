// using singleton

const tinderUser = {}

tinderUser.id = 1
tinderUser.name = "Harry"
tinderUser.isActive = true

console.log(tinderUser);


// nested things

const regUser = {
    email: "some@some.com",
    CompleteName: {
        fullName: {
            Firstname: "John",
            Lastname: "Doe"
        }
    }
}


console.log(regUser.CompleteName.fullName);
console.log(regUser.CompleteName?.fullName.Firstname);// ? is used when there is not the certainty of the eleement to be present or not.


// Problems of Combining Objects

const obj1 = { 1: 'a', 2: 'b', 3: 'c' }
const obj2 = { 4: 'd', 5: 'e', 6: 'f' }


// // 1 way
// const obj3 = { ...obj1, ...obj2 }
// console.log(obj3);

// 2nd Way
// const obj4 = Object.assign({}, obj1, obj2);
// console.log(obj4);

const user = [
    {
        id: 1,
        name: "abc"
    },
    {
        id: 2,
        name: "efg"
    },
    {
        id: 3,
        name: "fjd"
    }
]

console.log(user[0].id);


// Ways to find out all the Keys and Values of the objects

// keys --> we get the output in array format which is very helpful.
console.log(Object.keys(tinderUser));
// Values
console.log(Object.values(tinderUser));
// key-value pair
console.log(Object.entries(tinderUser));


// Has the property or not
console.log(tinderUser.hasOwnProperty('name'));


// ------- Object Destructutring --------------------------------

const College = {
    name: "SGGS",
    rank: 1,
    loc: "Nanded",
    Branch: 10
}

const { loc, rank } = College;

// with the help of destructreing i can do this
console.log(loc);
console.log(rank);

// but w/o this it would have been
console.log(College.loc);
console.log(College.rank);


// Talks mostly about API

// API : Waiter is just like API, getting the food from the kitchen,
// the Menu Cards are the API Documentation

// API : 2 Forms
// 1. Object Format --> Have same format but not the object name.
// 2. XML Format

