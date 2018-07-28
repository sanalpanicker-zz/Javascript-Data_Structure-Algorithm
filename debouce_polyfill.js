
let originalFunction = () => {
    console.log("I am fired");
}

let doriginalFunction = () => {
    console.log("dI am fired");
}

//polyfill for loadash debounce

//so in debounce return function is called all the time its triggered, 
//but the idea is to delay the otriginal function,
// and any inbetween click will just delete the timeout(so no original fucntion trigger happens) and only the last click within 50ms will be triggered.
let debouncedFunction = (callback, waitTime) => {
    var timeout;
    return () =>{
    console.log("function called");
    //clear the timeout so all subsequent calls within waitime dont trigger a function call.
    clearTimeout(timeout);
    timeout = setTimeout(callback,waitTime);
    }
}

//debiunced version of the function
let dOriginalFunct = debouncedFunction(doriginalFunction, 50);

// //calling function without debounce
// let interval = setInterval(originalFunction,20);
// let clear = () =>{
//     clearInterval(interval)
// }
// setTimeout(clear, 100);

let dinterval = setInterval(dOriginalFunct,10);
let dclear = () =>{
    clearInterval(dinterval)
}
setTimeout(dclear, 100);
