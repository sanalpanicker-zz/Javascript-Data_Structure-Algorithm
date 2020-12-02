const findSecondMaximum = (arr) => {
    let max = Number.NEGATIVE_INFINITY;
    let smax = Number.NEGATIVE_INFINITY;

    //ask questions , if the array doesnt have 0s then we can set the initail values to 0

    for (let a of arr) {
        if (a > max) {
            smax = max;
            max = a;
        }
        else if (a > smax && a != max) {
            smax = a;
        }
    }
    return smax;
}

console.log(findSecondMaximum([2, 4, 5, 3, 6, 1, 7, 0]));