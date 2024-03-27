/* Notes

#The Promise object represents the eventual completion (or failure) of an asynchronous operation and its resulting value.

#It is an Object

#A Promise is in one of these states:

    pending: initial state, neither fulfilled nor rejected.
    fulfilled: meaning that the operation was completed successfully.
    rejected: meaning that the operation failed.

# In earliear days before ES5,
    we used to use bluebird and Q librarires

    but it was eventually merged into Nodejs


*/

// Create a promise
const promise1 = new Promise(function(resolve, reject){
    // do the async task 
    // for eg: DB calls, cryptography, network calls
    setTimeout(()=>{
        console.log("Async task is completed");
        // ones the task is done we need to connect it to resolve
        resolve()
    },1000)

})

// Consume a promise

promise1.then(function(){
    console.log("Promise is consumed");
})

//2nd Way

new Promise((resolve,reject)=>{
    setTimeout(()=>{
        console.log("Hey I am 2nd Promise");
        resolve()
    },1000)
}).then(()=>{
    console.log("Promise 2 is consumed");
})

//3rd Promise | passing data through resolve()

const Promise3  = new Promise(function(resolve,reject){
   setTimeout(()=>{
       resolve({name:"Pranav", "post":"Intern"})
   },1000)
}).then(function(data){
    console.log(data);
})


// 4th promise | resolve | reject | chaining | catch | finally

const promise4 = new Promise(function(resolve,reject){
    setTimeout(()=>{
        let error = false
        if(!error){
            resolve({username:"Pranav", passwd:"qwerty"})
        }else{
            reject('Somethings are down!!')
        }
    },1000)
})

promise4
.then((user)=>{
    console.log(user);
    return user.passwd
})
.then((passwd)=>{
    console.log(passwd);
})
.catch((err)=>{
     console.log(err);
})
.finally(()=>{
    console.log('This block of code will always run, its just like default');
})

// #5 Promise with async and await
const promise5 = new Promise((resolve,reject)=>{
    setTimeout(()=>{
        let error = true;
        if(!error){
            resolve({name:"async", lastname:"await"})
        }else{
            reject('P5 went wrong!')
        }
    },1000)
})

async function p5Resolved(){
    try {
        const data = await promise5
        console.log(data);
    } catch (err) {
        console.log(err);
    }
}

p5Resolved()

// #6 fetch | async | await

// write await infront of those task that you think they are taking time.

async function getAllTodos(){
    try {
        const response = await fetch('https://jsonplaceholder.typicode.com/todos')
        const data = await response.json()
        console.log(data)
    } catch (error) {
        console.log(`Error: ${error}`);
    }   
}

// getAllTodos()

// 7 same thing but in .then() format

fetch('https://jsonplaceholder.typicode.com/todos')
.then((data)=>{
    return  data.json()
}).then((resp)=>{
    console.log(resp);
}).catch((err)=>{
    console.log("Error:",err);
})