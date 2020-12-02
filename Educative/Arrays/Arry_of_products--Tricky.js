function findProduct(arr) {

    let temp = 1;
    let rA = [];
    for (let i = 0; i < arr.length; i++) {
        rA.push(temp);
        temp = temp * arr[i];
    }
    console.log(rA);
    temp = 1;
    for (let i = arr.length - 1; i >= 0; i--) {
        console.log(`temp : ${temp} rA: ${rA[i]}`);
        rA[i] = rA[i] * temp;
        temp = temp * arr[i];
    }
    console.log(rA);
}

findProduct([1, 3, 4, 5]);