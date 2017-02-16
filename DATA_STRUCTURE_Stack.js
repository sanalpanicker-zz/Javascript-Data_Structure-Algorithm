"use strict";

function Stack() {
    //gives size of the stack
    this._size = 0;
    this._storage = {};
}

Stack.prototype.pop = function () {

    //popping out the last data//
    var size = this._size, deletedData;
    //store the deletedData; and then delete the object property
    if (size) {
        deletedData = this._storage[size];
        delete this._storage[size];
        //reduce the size
        this._size--;
    }
    return deletedData;

}


Stack.prototype.push = function (data) {
    //increment the size and then assign
    var size = ++this._size;
    //add the data
    this._storage[size] = data;
}




var item1 = new Stack();
item1.push("12");
item1.push("13");
item1.push("14");
item1.push("15");


console.log(item1);

var delData = item1.pop();
console.log(delData);
console.log(item1);
