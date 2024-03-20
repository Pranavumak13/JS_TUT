// --------- Filter | MAP | Reduce


//FILTER
// filter needs the callback funtion
const myNums = [1,2,3,4,5,6,7,8,9,10]

// 1
const newNums = myNums.filter((num)=>(num>5))
console.log(newNums);

//2 interesting --> syntax for callback is ()=>{} then keep in mind that you have to explicitly write the 'return' keyword because you are creating a new scope by adding the "{}"
const numbers = myNums.filter((num) => {
    return (num>8)
})
console.log(numbers);

// same work but with the help of FOREACH
const newNumbers = []
myNums.forEach((item)=>{
    if(item>7){
        newNumbers.push(item);
    }
})
console.log(newNumbers);


const books = [
    { title: 'Book One', genre: 'Fiction', publish: 1981, edition: 2004 },
    { title: 'Book Two', genre: 'Non-Fiction', publish: 1992, edition: 2008 },
    { title: 'Book Three', genre: 'History', publish: 1999, edition: 2007 },
    { title: 'Book Four', genre: 'Non-Fiction', publish: 1989, edition: 2010 },
    { title: 'Book Five', genre: 'Science', publish: 2009, edition: 2014 },
    { title: 'Book Six', genre: 'Fiction', publish: 1987, edition: 2010 },
    { title: 'Book Seven', genre: 'History', publish: 1986, edition: 1996 },
    { title: 'Book Eight', genre: 'Science', publish: 2011, edition: 2016 },
    { title: 'Book Nine', genre: 'Non-Fiction', publish: 1981, edition: 1989 },
  ];

// History Books
  const userBooks = books.filter((bk)=>bk.genre==='History')
  console.log(userBooks);

// Published after 2000 or genre is fiction
  const bks2000 = books.filter((bk)=>bk.publish>2000 || bk.genre==='Fiction')
  console.log(bks2000);


//////////////// Maps

// diffrece between Maps and ForEach is that the former return the values whereas the later doesnt

 const newIncrNum = myNums.map((num)=>{
    return num+10
 })
 console.log(newIncrNum);



// Chaining Concept --> multiple methods can be applied simultaneously
// *10, /5, op after 50
const output = myNums.map((num)=>num*10)
                     .map((num)=>num/5)
                     .filter((num)=>num>10)   

console.log(output);


////////////////////////// Reduce

// {(accumulator, currentValue), initialValue}

const arr = [1,2,3,4]

const tot = arr.reduce(function(acc,currVal){
  // console.log(acc,currVal);
  return (acc+currVal)
}, 0)

// console.log(tot);


// without the funtion keyword

const total = arr.reduce((acc,currVal)=> acc+currVal,0)
console.log(total);


const shopingCart = [
  {
    itemName:"JS Course",
    price:2999
  },
  {
    itemName:"Mobile Dev Course",
    price:5999
  },
  {
    itemName:"CPP Course",
    price:1999
  },
]

// task add all the price in the shipping carts


// intersting | major task is to take out the value form the array.objects
const allPrice = shopingCart.reduce((acc, currVal) => (acc+currVal.price),0)
console.log(allPrice);