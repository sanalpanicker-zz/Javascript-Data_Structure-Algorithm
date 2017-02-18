//Implementing the indexof function in javascript with the binarysearch.

Array.prototype.nIndexOf = function(value){
    var firstIndex = 0,
        lastIndex = this.length - 1,
        middleIndex = Math.floor((lastIndex + firstIndex) / 2);

    while (this[middleIndex] != value && firstIndex < lastIndex) {

        if (value < this[middleIndex]) {
            lastIndex = middleIndex - 1;
        } else if (value > this[middleIndex]) {
            firstIndex = middleIndex + 1;
        }
        middleIndex = Math.floor((firstIndex + lastIndex) / 2);
    }

    return (this[middleIndex] != value) ? -1 : middleIndex;
};

var array = ['1','2','3','4','5','6','7','8'];
console.log(array.nIndexOf(9));