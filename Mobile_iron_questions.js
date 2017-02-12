// # For Ex if str = '{0} and {1} or {2}' and values = ['king', 'Hey', 'kumar'] then output should be 'king and Hey or kumar'
// # If str = '{0}{1}{2}' and values =  ['king', 'Hey', 'kumar'] then output should be 'kingHeykumar'
// # if str = 'this is beautiful day {2}' and values = ['a', 'b', 'fruit'] then output should be 'this is beautiful day fruit'

// 1) Write generic formatString implmentation

function formatString(str, values) {
for(var i=0;i<value.length;i++){
var regex = new RegExp('/{'+ i +'}/g');
str = str.replace(regex,values[i]);
}
return str;
}


// 2) Write a program that generates fibonnacci series using recursion. For ex generate an output like 1,1,2,3,5,8,13,21,34,55,89,.....,1000. Every number is a sum of previous 2 numbers with the exception of number 1 which is repeated twice. Terminate your program when the last number is >= 1000

var value = 0;
var numArr = [];
function genratefib(num1,num2){

if(num2 <= 1000){
numArr.push(num1);
genratefib(num2,num1+num2);

}

console.log(numArr);
}
genratefib(1,1);

// 3) Write a generic program which looks through each object in the list of objects, 
// returning an array of all the objects that contain all of the key-value pairs listed in properties. 
// Below is the function. 

// Ex. 

// var list = 
// [
//     { 
      
//       lName: 'Dang', 
//       displayName: 'Luan Dang',
//       phNo: '123=-456',
//       fName: 'Luan'
      
//     }, 
//     {
//       fName: 'samir', 
//       lName: 'gandhi'
//     }
//  ] 
 
//  and propJSON = {
//         fName: 'Luan', 
//         lName: 'Dang'
//      } 

// then output should be   
        
// [
//     { 
//       fName: 'Luan', 
       
//       displayName: 'Luan Dang',
//        lName: 'Dang'
//       phNo: '123=-456',
     
//     }
// ] 
 
//  but if my propJSON is
// {
//    fName: 'Akansha', 
//    lName: 'foo'
// } 
//    then output should be []
   
function findObjects(list, propJSON) {

var objectResultArr = [];

list.forEach(function(objectItem){
var bool = false;
for(key in propJSON){
if(objectItem.hasOwnProperty(key) && objectItem[key] == propJSON[key]){
bool = true;
}else{
bool = false;
break;
}
}
if(bool == true){
objectResultArr.push(objectItem);
}
});
return objectResultArr;

};


// 4) Write css / html / js code for pie chart




// 5) Write a program that generates string like "x seconds ago", "x minutes ago", "x hours ago", "x days ago". The input to the function is past time in milli seconds.
// For eg. If current time is 9:00 AM and pastTimeInMilliSeconds is 8:00 AM in milliseconds then output should be "1 hour ago". ex. is 122334567888999

function getFormattedTime(pastTimeInMilliSeconds) {

}