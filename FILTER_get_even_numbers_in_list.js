// We can use Array.filter() to visit each item in a list, much like map(); however, the predicate function you pass to filter() should return either true, to allow that item in the list, or false to skip it. Also like map(), filter() returns a new array with copies of the items that match the filter and does not modify the original.

function filterFindEven(array) {
    return array.filter(function (item, position) {
        return item % 2 === 0;
    });
}

console.log(filterFindEven([2, 4, 5, 7, 8, 9]));