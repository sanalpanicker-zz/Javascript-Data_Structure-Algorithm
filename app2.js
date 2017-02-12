console.log("Hello World");

var stockPricesYesterday = [9,100,6,5,1];

function getMaxProfit(stockPricesYesterday) {

    var minPrice = stockPricesYesterday[0];
    var maxProfit = 0;

    for (var i = 0; i < stockPricesYesterday.length; i++) {
        var currentPrice = stockPricesYesterday[i];

        // ensure min_price is the lowest price we've seen so far
        minPrice = Math.min(minPrice, currentPrice);

        // see what our profit would be if we bought at the
        // min price and sold at the current price
        var potentialProfit = currentPrice - minPrice;

        // update maxProfit if we can do better
        maxProfit = Math.max(maxProfit, potentialProfit);
    }

    return maxProfit;
}
console.log(getMaxProfit(stockPricesYesterday));



function findMulInterger(Array1){

var beforeIndexMulArr =[];
var beforeIndexMulVal = 1;
for(var i=0; i<Array1.length ; i++){
    beforeIndexMulArr[i] = beforeIndexMulVal;
    beforeIndexMulVal = beforeIndexMulVal * Array1[i];
}
return beforeIndexMulArr;
}
console.log(findMulInterger([1,2,3,4]));

//2*3*4 , 1*3*4 , 1*2*4 , 1*2*3 //original

//2*3*4 , 3*4 , 4 , 1 //

// 1  , 1 ,1*2 , 1*2*3 //backward

function findMulAfterInterger(Array2){

var AfterIndexMulArr =[];
var AfterIndexMulVal = 1;
for(var i=Array2.length-1; i>=0; i--){
    AfterIndexMulArr[i] = AfterIndexMulVal;
    AfterIndexMulVal = AfterIndexMulVal * Array2[i];
}
return AfterIndexMulArr;
}

console.log("ArrayAfter : "+findMulAfterInterger([1,2,3,4]));
[ 1, 1, 2, 6 ]
//[24,12,4,1]


//Array of intergers get the maximum of  3 the integers.
[10,20,10,3,1]



// function hiCalMerge(DateObj){

// var startTime;

// var _sortedMeetings  = DateObj.sort(function(a,b){
//     return a.startTime > b.startTime ? 1 :-1;
// });
// console.log("_sortedMeetings : "+_sortedMeetings);
// var mergedMeeting = [_sortedMeetings[0]];
// for(var i =1 ; i< _sortedMeetings.length ; i++){

// console.log("_sortedMeetings _i : "+JSON.stringify(_sortedMeetings[i]));
// var currentMeeting = _sortedMeetings[i];
// var lastMergedMeeting = mergedMeeting[mergedMeeting.length -1];
// if(currentMeeting.startTime <= lastMergedMeeting.endTime){
// lastMergedMeeting.endTime = Math.max(currentMeeting.endTime,lastMergedMeeting.endTime);
// }
// else{
//     mergedMeeting.push(currentMeeting);b,bn,

// }

//}


console.log(hiCalMerge([{startTime: 1, endTime: 3}, {startTime: 5, endTime: 6}, {startTime: 3, endTime: 5}]));



// if((DateObj[0].endTime <= DateObj[1].startTime) || (DateObj[0].endTime > DateObj[1].startTime && DateObj[0].endTime < DateObj[1].endTime)){
//  DateObj[0].endTime = DateObj[1].endTime;
// return DateObj[0];
// }else{
//     return DateObj[0];
// }
var fruits = [{startTime: 1, endTime: 3}, {startTime: 3, endTime: 5}];
var citrus = fruits.slice();

console.log(citrus);