// -----------------------------for of

// plane array ["","",""]
// array of objects [{},{},{}]
// No decrement or Increment is required

// array --> ok
const arry = [1,2,3,4,5]
 
for (const i of arry) {
    // console.log(i);
}

// string --> ok
const str = "Hello"

for (const i of str) {
    // console.log(i);
}

// --------------------Maps

 const map = new Map()
 map.set('IN','+91')
 map.set('USA','+1')
 map.set('USA','+1')
 map.set('JPN', '+2')

//  console.log(map);


// forof works good with MAP too.
 for (const [key,value] of map) {
    // console.log(key, ':' ,value);
 }


// forin xxxxxxxxx doesnt work
 for (const key in map) {
   console.log(key);
 }


//  For of for OBjects

const myObject = {
    'game1':'nfs',
    'game2':'vice city',
    'game3':'GTA'
}


// for (const key of myObject) {
//     console.log(key);
// }

// ------- Intersting
// for of is not iterable over the OBJECTS | Keep in mind
// therefore we have forin loop but it is not the only purpose of forin loop

for (const key in myObject) {
    console.log(`${key} is ${ myObject[key]}`);
}

// lets try out the forin loop for arrays
// keys> indexes of arrays
// Values > value at the indec
const arr = [76,20,96,55,67]

for (const i in arr) {
    console.log(arr[i]);
}


//------------ forEach

// const coding = ['js','cpp','c','css','html']
// //1
// coding.forEach(function (i) {
//     console.log(i);
// })

// //2
// coding.forEach(element => {
//      console.log(element);
// });

// //3
// function printMe(val){
//     console.log(val);
// }
// coding.forEach(printMe)

// //4 access level of forEach
// coding.forEach((val, index, arr) =>{
//     console.log(val,index,arr);
// } )

// forEach on objects
// very important....
const codingLang = [
    {
        progLangName:"C++",
        progLangExt:".cpp"
    },
    {
        progLangName:"Javascript",
        progLangExt:".js"
    },
    {
        progLangName:"Python",
        progLangExt:".py"
    }
]


codingLang.forEach(element => {
    console.log(element.progLangName);  
    console.log(element.progLangExt);  
});


/*
forof
array
string
maps

not --> objects


forin
array
strings
objects

not --> maps
*/