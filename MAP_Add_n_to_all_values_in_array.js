//for each works
function addN(array, N) {
    array.forEach(function (items, position) {
        array[position] = items += N;
    });
    return array;
}

console.log(addN([1, 2, 3], 10));
//doing with Array.map

function mapAddN(array,N){
    return array.map(function(item,position){
        return item = item+N;
    });
}

console.log(mapAddN([1, 2, 3], 10));

