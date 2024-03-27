fetch('https://jsonplaceholder.typicode.com/todos')
.then((data)=>{
    return  data.json()
}).then((resp)=>{
    console.log(resp);
}).catch((err)=>{
    console.log("Error:",err);
})


/*
Notes 
all about fetch()

#The Fetch API provides an interface for fetching resources (including across the network). It is a more powerful and flexible replacement for XMLHttpRequest.

#The fetch() method takes one mandatory argument, the path to the resource you want to fetch. 
It returns a Promise that resolves to the Response to that request — as soon as the server responds with headers — even if the server response is an HTTP error status. 

#The global fetch() method starts the process of fetching a resource from the network, returning a promise that is fulfilled once the response is available.

#A fetch() promise only rejects when the request fails, for example, because of a badly-formed request URL or a network error. 
    A fetch() promise does not reject if the server responds with HTTP status codes that indicate errors (404, 504, etc.). Instead, a then() handler must check the Response.ok and/or Response.status properties.

    --> Status code are Response only not an error ---------- Interesting ----

#Return value
A Promise that resolves to a Response object.
*/