let arr1 = [
    1,
    5,
    7,
    9,
    23,
    32,
    89,
    90,
    93,
    97,
    4000
];
let arr2 = [
    2,
    6,
    8,
    10,
    12,
    14,
    46,
    80,
    90,
    100,
    7000
];

let mergeArray = (arr1, arr2) => {
    // O(1) + Chrome’s v8 uses a combination of InsertionSort and QuickSort. That is,
    // if the array is less than 10 elements in length, it uses an InsertionSort.
    // insertion sort is O(n) -> so this is good! if its more than 10 then O(nlogn)
    // -> may be not a good way to do this. 
    
    //! return arr1.concat(arr2).sort((a,b) => a-b); //O(nlogn)

    //if more than 10 input lets use this logic; //!O(n)

    const mergerdArray = [];
    let headIndex = 0;

    while (arr1.length && arr2.length) {
        if (arr1[headIndex] < arr2[headIndex]) {
            //shift mutates the original array
            mergerdArray.push(arr1.shift());
        } else {
            mergerdArray.push(arr2.shift());
        }

    }
    if (!arr2.length) {
        //returning here becasue concat dosent mutate the original array :(
        return mergerdArray.concat(arr1)
    } else if (!arr1.length) {
        return mergerdArray.concat(arr2)
    }
    //return mergerdArray;
}

console.log(mergeArray(arr1, arr2));