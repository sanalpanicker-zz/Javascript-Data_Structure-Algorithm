//Challenge 10: Rearrange Sorted Array in Max/Min Form

//[1,2,3,4,5,6,7] ==> [7,1,6,2,5,3,4]

function maxMin1(arr) {
    var result = []
    for (var i = 0; i < (Math.floor(arr.length / 2)); i++) {
        result.push(arr[arr.length - (i + 1)])
        result.push(arr[i])
    }

    if (arr.length % 2)
        result.push(arr[Math.floor(arr.length / 2)])
    return result
}


//arrangeArr([1, 2, 3, 4, 5, 6, 7])

function maxMin2(arr) {
    var maxIdx = arr.length - 1
    var minIdx = 0
    var maxElem = arr[maxIdx] + 1; // store any element that is greater than the maximum element in the array 
    for (var i = 0; i < (arr.length); i++) {
        // at even indices we will store maximum elements
        if (i % 2 == 0) {
            arr[i] += Math.floor((arr[maxIdx] % maxElem) * maxElem)
            maxIdx -= 1
        }
        else { // at odd indices we will store minimum elements
            arr[i] += Math.floor((arr[minIdx] % maxElem) * maxElem)
            minIdx += 1
        }
    }
    // dividing with maxElem to get original values.
    for (var i = 0; i < (arr.length); i++) {
        arr[i] = Math.floor(arr[i] / maxElem)
    }
    return arr
}

console.log(maxMin2([1, 2, 3, 4, 5, 6, 7]))