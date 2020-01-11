
//fix this using the map method
const longestSubString = (input) => {
    let memo = {};
    let maxVal = 0;
    for(let i = 0; i< input.length ; i++){
        if(memo.hasOwnProperty(input.charAt(i))){
            if(Object.keys(memo).length > maxVal){
                maxVal = Object.keys(memo).length;
                delete memo[input.charAt(i)];
                memo[input.charAt(i)] = 1;
            }
    }else{
        memo[input.charAt(i)] = 1;
    }
}
if(Object.keys(memo).length > maxVal){
    maxVal = Object.keys(memo).length;
}
return maxVal;
};

console.log(longestSubString("pwwkew"));