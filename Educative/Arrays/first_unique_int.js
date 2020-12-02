const first_unique_int = (arr) => {
    const memo = {};
    arr.forEach(e => {
        if (memo.hasOwnProperty(e)) {
            delete memo[e];
        } else {
            memo[e] = 1;
        }
    });

    // loop over the array it self so we can preserve the order
    //object may not preserve the order
    for (let i of arr) {
        if (memo[i]) {
            return i;
        }
    }
}

console.log(first_unique_int([2, 2, 3, 4, 4, 5]));