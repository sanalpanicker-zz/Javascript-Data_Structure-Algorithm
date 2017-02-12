function findRepeatNumber(numberrangefrom0_10){

var sumOfNumberFromO_10 = (10*10+10)/2 //n2*n/2

var sum_of_array = numberrangefrom0_10.reduce(function(a,b){
    return a+b;
})

return sum_of_array - sumOfNumberFromO_10;
}

console.log(findRepeatNumber([1,2,3,4,5,6,7,8,9,10,6]));