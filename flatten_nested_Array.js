// It's not tail-call optimized but if your array doesn't have many levels of deep nesting, your call stack will be safe enough.

//setting initial value to pass to reduce
var alreadyflattendArray = [];

function flatten(unFlatArray) {
    return unFlatArray.reduce(function (alreadyflattend, toFlatten) {
        return alreadyflattend.concat(Array.isArray(toFlatten) ? flatten(toFlatten) : toFlatten);
    }, alreadyflattendArray)
}

var nested = [3, [1, 'hey', [2, 'you', [2, 5]]], 1, [9, [{},
    [2, true]
]]];

console.log(flatten(nested));

//another neat trick

//https://codetuts.tech/flatten-deep-nested-array-object/ good read:

//More memory friendly and non recursive funtion

function flattenNonRecursive(array) {
    var result = [];
    var item;
    while (array.length > 0) {
        item = array.shift();
        if (!Array.isArray(item)) {
            result.push(item);
        } else {
            array = item.concat(array);
        }
    }
    return result;
}

var nested2 = [3, [1, 'hey', [2, 'you', [2, 5]]], 1, [9, [{},
    [2, true]
]]];

console.log(flattenNonRecursive(nested2));