// Implement a queue ↴ with 2 stacks ↴ . Your queue should have an enqueue and a dequeue function and it should be "first in first out" (FIFO).

function QueueTwoStack(){
this.inStack = [];
this. outStack = [];
}

QueueTwoStack.prototype.enque = function(item){
this.inStack.push(item);
}

QueueTwoStack.prototype.deque = function(){
    
if(this.outStack.length === 0){
    //move items from the instack to outstack so it reverses the order.
    while(this.inStack.length > 0){
        this.outStack.push(this.inStack.pop());
    }
    //
    if(this.outStack.length === 0){
        return undefined
    }
    
}
return this.outStack.pop();
}

var queue = new QueueTwoStack();
queue.enque("5");
console.log(queue.deque());