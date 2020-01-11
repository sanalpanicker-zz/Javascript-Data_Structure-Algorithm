function fibNthValue(n){

if(n <= 2){
    return 1;
}
return fibNthValue(n-1)+fibNthValue(n-2);
}

console.log(fibNthValue(20));

//memoized version

function fibonacci(num, memo) {
    memo = memo || {};
  
    if (memo.hasOwnProperty(num)) return memo[num];
    if (num <= 1) return 1;
  
    return memo[num] = fibonacci(num - 1, memo) + fibonacci(num - 2, memo);
  }