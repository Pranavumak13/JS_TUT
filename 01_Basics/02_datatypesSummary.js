//1. Primitive 

// All are call by value (COPIED one)
// 7 Types: string, number, boolean, undefined, null, symbol, bigint

// ------------------------------------------------------

//2. Non-Primitive / Reference

// Arrays, Objects, Functions

// Arrays
const arr1 = [1, 2, 3];

// Objects
const myObjectWhichIsPerson = {
    name: "John",
    age: 30,
    hobbies: ["sports", "cooking"],
}

// Functions



// ------------------------------------------------------

// Is javascript a dynamically-typed or statically-typed language?
// Dynamically-typed
// JavaScript is a dynamically typed language, which means that data types of variables are determined by the value they hold at runtime and can change throughout the program as we assign different values to them. There's no inbuilt way to annotate or restrict the types of variables.


// Symbol is used to check the uniqueness of the variable
const id = Symbol('123');
const anotherId = Symbol('123');

console.log(id == anotherId);


// ------------------------------------------------------

// Stack and Heap Memory

// Primitive => Stack Memory
// Non-Primitive => Heap Memory

