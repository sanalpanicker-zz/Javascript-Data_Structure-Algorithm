const min_value_arr = (arr) => {

    return arr.reduce((min, e) => {
        return e < min ? e : min;
    }, arr[0])
}

console.log(min_value_arr([5, 3, 1, -1, -23]));