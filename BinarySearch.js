
//Binary Search

function binarySearch(array, value) {

    var firstIndex = 0,
        lastIndex = array.length - 1,
        middleIndex = Math.floor((lastIndex + firstIndex) / 2);

    while (array[middleIndex] != value && firstIndex < lastIndex) {

        if (value < array[middleIndex]) {
            lastIndex = middleIndex - 1;
        } else if (value > array[middleIndex]) {
            firstIndex = middleIndex + 1;
        }
        middleIndex = Math.floor((firstIndex + lastIndex) / 2);
    }

    return (array[middleIndex] != value) ? -1 : middleIndex;
}

var array = ['1','2','3','4','5','6','7','8'];
console.log(binarySearch(array,7));

//This can be used to implement the indexOf property of Arrays.

