const findClosest = (arr1,arr2) => {

    let minDiff = Number.POSITIVE_INFINITY;

    let result1 = 0;
    let result2 = 0;
    let i =0; let j = 0;

    while(i < arr1.length && j< arr2.length){
        let diff = Math.abs(arr1[i] - arr2[j]);
        if(diff < minDiff){
            minDiff = diff;
            result1 = i;
            result2 = j;
        }
        //keep incrementing the minimum value
        if(arr1[i] < arr2[j]){
            i++;
        }else{
            j++;
        }
    }
return {diff:minDiff, a1:arr1[result1], a2:arr2[result2]}
}

arr1 = [5,8,10,40, 50];
arr2 = [6,9,15,40, 45];

console.log(findClosest(arr1, arr2));