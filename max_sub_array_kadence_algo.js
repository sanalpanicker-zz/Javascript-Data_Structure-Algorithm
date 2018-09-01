//https://www.geeksforgeeks.org/largest-sum-contiguous-subarray/
// https://medium.com/@marcellamaki/finding-the-maximum-contiguous-sum-in-an-array-and-kadanes-algorithm-e303cd4eb98c


let maxSubArray = (arr) =>{

let globalMax = 0,
    currentMax = 0;

    //o(N) - kadence algo
    for(let i=0; i< arr.length ; i++){
        currentMax = Math.max(currentMax+arr[i], arr[i]);
        globalMax =  Math.max(globalMax, currentMax);
    }

    return globalMax;
}

console.log(maxSubArray([-1,-2,2,3,4]));