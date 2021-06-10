//implement stacks

class Stack {
    constructor() {
        this.items = [];
        this.top = null;
    }

    push(item) {
        this.items.push(item);
        this.top = item;
        return this;
    }

    pop() {
        return this.isEmpty() ? this.items.pop() : null;
    }

    isEmpty() {
        return this.items.length == 0;
    }

    getTop() {
        return this.isEmpty() ? null : this.items[this.items.length - 1];
    }

    size() {
        return this.items.length;
    }
}


const myStack = new Stack();
myStack.push(100).push(300).push(900).push(70);
console.log(myStack.getTop());
console.log(myStack.items);