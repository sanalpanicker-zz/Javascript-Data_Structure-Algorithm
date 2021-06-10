// Challenge 1:​ Generate Binary Numbers From 1 to n Using Queue
// Can you generate binary numbers from 1 to any given number "n"?

const Queue = require('./queue.js');

const findBin = (n) => {
    let result = [];
    let myQueue = new Queue();
    var s1, s2;
    myQueue.enqueue("1");
    for (var i = 0; i < n; i++) {

        result.push(myQueue.dequeue());
        s1 = result[i] + "0";
        s2 = result[i] + "1";

        myQueue.enqueue(s1);
        myQueue.enqueue(s2);
        console.log(myQueue);
    }

    return result;
}

console.log(findBin(10))