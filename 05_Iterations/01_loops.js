// for loop

for (let index = 1; index < 10; index++){
    const element = index;
    console.log(element);
}


for (let i = 0; i < 5; i++) {
    for (let j = 0; j < i; j++) {
        // console.log("* ");
        process.stdout.write("* ")
    }
    console.log("\n");
}

// break and Continue

// for (let index = 1; index <= 20; index++) {
//     if (index == 5) {
//         console.log(`Detected 5`);
//         break
//     }
//    console.log(`Value of i is ${index}`);
    
// }

for (let index = 1; index <= 20; index++) {
    if (index == 5) {
        console.log(`Detected 5`);
        continue
    }
   console.log(`Value of i is ${index}`);
    
}