let o_func = () =>{
    console.log("I am fired");
}

let throttled = (callback, delay) =>{

    let throttled;
    return () => {
        console.log("callig function invoked");
        if(!throttled){
            throttled = true;
            console.log("throttled event call");
            callback();
            setTimeout(()=>{throttled = false},delay);
        }
    }
}

let t_func = throttled(o_func, 100);



let interval = setInterval(t_func, 10);
setTimeout(()=>{clearInterval(interval)},1010);