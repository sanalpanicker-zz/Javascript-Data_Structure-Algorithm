//run in chrome as its a node.js env

const waitForAll = (promiseArr) => {
    return new Promise((resolve, reject) => {
        let noOfPromises = promiseArr.length;
        let resultArr = [];
        //make sure its resolved only after all promises are resolved.
        let isFinished = () => {
            noOfPromises = noOfPromises - 1;
            if (noOfPromises === 0) {
                resolve(resultArr);
            }
        }
        promiseArr.map((promise, index) => {
            console.log("-->" + index);
            promise.then(data => {
                console.log(data + " " + index);
                resultArr[index] = data;
                //rember to chain then - then can be kept on chaining with a return if you want to.
                //refer : https://javascript.info/promise-chaining
            }).then(isFinished).catch((e)=>{console.log("goign to log error");reject(e)});
        })
    });
}

const promise1 = new Promise(resolve => {
    //window.setTimeout(() => resolve("data1"), 1000);
    resolve("data1")
});

const promise2 = new Promise(resolve => {
    //window.setTimeout(() => resolve("data2"), 500);
    resolve("dat2")
});
const promise3 = new Promise(resolve => {
    //window.setTimeout(() => resolve("data3"), 1500);
    resolve("data3")
});
const promise4 = new Promise(resolve => {
    //window.setTimeout(() => resolve("data4"), 20);
    resolve("data4")
});
const promise5 = new Promise((resolve, reject)=>{reject(new Error("blasted"))});

// sample: 
waitForAll([promise1, promise2, promise3, promise4, promise5]).then(result => {
    console.log(result);
}).catch((error)=>{
console.log("in here", error);
});