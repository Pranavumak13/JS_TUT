// Immediatly invoked Funtion Expression

// why we use this 
// 1. Immediate excution of any required function | usecase: when server started then immedialtly DB connections is established
// 2. GLobal Scope doesnt get polluted | meaning sometimes child & parent both have same name so the confusion occurs hence the ans is SCOPE

//syntax ()()

(function chai(){  // name IIFE
    console.log('DB Connected');
})();  // no need of explicitly call chai() | ; is very important


(()=>{ // Unnamed IIFE
    console.log("DB COnnected 2")
})();

// IIFE when invoked needs to know when to stop hence add ; at the end

// when needs Arguments
((i) => {
    console.log(`DB COnnected ${i}`)
})(3)