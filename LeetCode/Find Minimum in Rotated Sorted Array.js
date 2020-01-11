//first preffered JS way of doing

const findMinimum = (arr) => {
   return Math.min(...arr);
}

//withou using math utility

//Brute force approach - iteration O(n)
const findMin = (arr) => {
let min = arr[0];
    for(var i=1; i< arr.length;i++){
if(arr[i] < min){
    min = arr[i];
}
    }
return min;
}

//Binary search Approach
const findMinWithBinarySearch = (arr) => {
let start = arr[0];
let end = arr[arr.length -1];
if(start < end){
    return arr[0];
}
//array is rotated
while(start > end){

const mid =  arr.length/2;

if(arr[mid] > arr[mid+1]){
    return arr[mid+1];
}
if(arr[mid] < arr[mid-1]){
    return arr[mid];
}

if(arr[mid] > arr[0]){
    start = arr[mid+1];
}
else{
    end = arr[mid-1];
}

}
return -1;
    }




//console.log(findMinimum([3,4,5,6,1,2]));
//console.log(findMin([3,4,5,6,1,-2]));

console.log(findMinWithBinarySearch([3,4,5,6,-2,-1,0,1,1]));