const removekDigits = (nums, k) => {
  let resultArray = [];
  //inital check  - if input not present or length is less that the digits to eb removed, return 0
  if (!nums || nums.length <= k) {
    return "0";
  }
  //inital check  - if k = 0 return the same number
  if(k==0){
      return nums;
  }
  let numArray = nums.split("");
  for (let i = 0; i < numArray.length; i++) {
      while(resultArray.length > 0 && resultArray[resultArray.length - 1] > numArray[i] && k > 0) {
        resultArray.pop();
        k--;
      }
        resultArray.push(numArray[i]);
      }
  resultArray = k>0 ? resultArray.slice(0,-k): resultArray
  return parseInt(resultArray.join('')).toString();
};



// var removekDigits = function(num, k) {
//     if(k==0) return num;
//     if(k>= num.length) return "0";
//     var arr=num.split("");
//     var m=arr.length;
//     var stack=[];
//     for(let i=0; i<m; i++){
//         while(k>0 && stack.length>0 && stack[stack.length-1] > arr[i]){
//             stack.pop();
//             k--;
//         }
//         stack.push(arr[i]);
//     }
//     stack = k>0? stack.slice(0, -k): stack;
//     return stack.join('').replace(/^0+/, '') || '0'
// };

console.log(removekDigits('1000235', 4));
