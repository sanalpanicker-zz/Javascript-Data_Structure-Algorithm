// You want to be able to access the largest element in a stack.
// You've already implemented this Stack class:

// Use your Stack class to implement a new class MaxStack with a function getMax() that returns the largest element in the stack. getMax() should not remove the item.

// Your stacks will contain only integers.

//implemeting stack in javascript
function Stack(){
    this.elements = [];
}


Stack.prototype.push = function(items){
this.elements.push(items);
}

Stack.prototype.pop = function(){
this.elements.pop();
}

Stack.prototype.peek = function(){

}
Stack.prototype.getMax = function(){

return Math.max.apply(null,this.elements);

}

var StackArr = new Stack();
StackArr.push(8);
StackArr.push(6);
StackArr.push(9);
;

console.log(StackArr.elements);
console.log(StackArr.getMax());
console.log(StackArr.pop());
console.log(StackArr.getMax());
