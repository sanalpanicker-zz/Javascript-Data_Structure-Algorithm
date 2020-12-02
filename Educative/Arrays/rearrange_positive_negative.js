const rearrange = (arr) => {
    let leftMostPosEle = 0;
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] < 0) {
            let temp = arr[i];
            arr[i] = arr[leftMostPosEle];
            arr[leftMostPosEle] = temp;
            leftMostPosEle++;
        }
    }
    return arr;

}

console.log(rearrange([-2, -6, -8, 30, 5, 7, 20, -5, 0]));