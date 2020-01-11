// const find3Sum = (arr)=>{
// const cache = {};

// for(var i=0;i<=arr.length-3;i++){
//     for(var j=1; j<= arr.length-2;j++){
//         for(var k=2; k<= arr.length-1;k++){
//             const hashkey = [arr[i],arr[j],arr[k]].sort().join('');
//             if(cache.hasOwnProperty(hashkey)){
//                 continue;
//             }
//             else if(arr[i]+arr[j]+arr[k] == 0){
//                 cache[hashkey] = [arr[i],arr[j],arr[k]];
//             }
//         }
//     }
// }
// return Object.values(cache);
// }

/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var threeSum = function(nums) {

    var ret = []; //ret is "return"
    if (!nums || nums.length < 3) return ret;
  
    nums.sort(function(a, b) {
      return a - b;
    });
    console.log(nums)
  
    for (var y = 0; y < nums.length - 2; y++) {
      if (y == 0 || nums[y] > nums[y - 1]) {
        var j = y + 1;
        var k = nums.length - 1;
  
        while (j < k) {
          var sum = nums[y] + nums[j] + nums[k];
          if (sum == 0) {
            ret.push([nums[y], nums[j], nums[k]]);
            j++;
            k--;
  
            //skip duplicates from j iterator                   
            while (j < k && nums[j] == nums[j - 1])
              j++;
  
            //skip duplicates from k iterator
            while (j < k && nums[k] == nums[k + 1])
              k--;
          }
  
          //if sum < 0 then we know we need to increase our lower number (remember the array is sorted)
          else if (sum < 0) {
            j++;
          }
          //if sum > 0 then we need to decrease our upper number
          else {
            k--;
          }
        }
      }
    }
    return ret;
  }
  
  console.log(threeSum([-1,0,1,2]))
  






//console.table(find3Sum([0,0,0]));