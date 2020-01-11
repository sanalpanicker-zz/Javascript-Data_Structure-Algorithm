function fibSeries(n){
var list = [1,1];
for(var i=2;i<n;i++){
    list.push(list[i-1]+list[i-2]);
}
return list;
}

console.table(fibSeries(100));


//even fib number



function printEvenFibNumbers(n){

const initArr = [1,1];
const result = [];
for(var i =2 ;i<n; i++){
    initArr.push(initArr[i-1] + initArr[i-2]);
    if(initArr[i]%2 === 0){
        result.push(initArr[i]);
    }
}
return result;
}

console.table(printEvenFibNumbers(100));
