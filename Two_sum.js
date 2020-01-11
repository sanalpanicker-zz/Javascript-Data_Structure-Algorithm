/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
const twoSum = function(nums, target) {
  const memo = {};
  const resultArr = [];

  for (let i = 0; i < nums.length; i++) {
    if (memo.hasOwnProperty(nums[i])) {
      resultArr[0] = memo[nums[i]];
      resultArr[1] = i;
      break;
    } else {
      memo[target - nums[i]] = i;
    }
  }
  return resultArr;
};
