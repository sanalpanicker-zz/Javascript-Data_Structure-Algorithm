// Given an array of integers, return indices of the two numbers such that they add up to a specific target.

// You may assume that each input would have exactly one solution, and you may not use the same element twice.

// Example:
// Given nums = [2, 7, 11, 15], target = 9,

// Because nums[0] + nums[1] = 2 + 7 = 9,
// return [0, 1].

function twoSum(numArr, target_num) {

    //having amemory array
    var memo = {};
    //array to store the final indexes
    var resultArray = [];

    for (var i = 0; i < numArr.length; i++) {

        if (memo.hasOwnProperty(numArr[i])) {

            resultArray[0] = memo[numArr[i]];
            resultArray[1] = i;

            break;
        } else {
            memo[target_num - numArr[i]] = i;
        }
    }
    console.log(memo);
    return resultArray;
}

console.log("< Two Sum Array > : " + twoSum([1, 6, 3, 4, 5], 9))
