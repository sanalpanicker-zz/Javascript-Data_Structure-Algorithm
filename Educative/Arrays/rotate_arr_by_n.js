const rotateArrByN = (arr, n) => {
    const samepleArr = [...arr];
    arr.forEach((e, i) => {
        samepleArr[(i + n) % arr.length] = e;
    });
    return samepleArr;
}

console.log(rotateArrByN([1, 2, 3, 4, 5], 3))