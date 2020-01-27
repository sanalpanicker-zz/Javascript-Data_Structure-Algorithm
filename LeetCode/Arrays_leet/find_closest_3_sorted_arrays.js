const findMInDiff3  = (arr1,arr2,arr3) => {

    let minDiff = Number.POSITIVE_INFINITY;
    let i = 0, j=0, k=0;
    let result_i, result_k, result_j;

    while(i<arr1.length && j< arr2.length && k< arr3.length){
        let min = Math.min(arr1[i],arr2[j],arr3[k]);
        let max = Math.max(arr1[i],arr2[j],arr3[k]);
        let diff = Math.abs(max-min);
        if(diff < minDiff){
            minDiff = diff;
            result_i = i;
            result_j =j;
            result_k =k;
        }
        if(arr1[i] == min){
            i++;
        }else if(arr2[j] == min){
            j++;
        }else{
            k++;
        }
    }
    return {diff: minDiff, a1:arr1[result_i], a2:arr2[result_j], a3:arr3[result_k]}
}

console.log(findMInDiff3([5,10,15],[3,6,9,12,15],[8,16,24]));