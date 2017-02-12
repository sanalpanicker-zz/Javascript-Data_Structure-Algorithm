// Write an efficient function that checks whether any permutation ↴ of an input string is a palindrome ↴ .
// Examples:

// "civic" should return true
// "ivicc" should return true
// "civil" should return false
// "livci" should return false


//approch one using Object
function checkPermutaionPalindrome(string){


var charTracker ={};


for(var i=0,l=string.length;i<l;i++){
    var char = string[i];
if(charTracker.hasOwnProperty(char)){
    delete charTracker[char];
}else{
    charTracker[char] = 1;
}
}
return Object.keys(charTracker).length <= 1
}

console.log(checkPermutaionPalindrome("civiic"));


//more effcient approch using a set

function checkPermutaionpalindromSet(string){

var charTracker = new Set();

for(var i=0,l=string.length;i<l;i++){
    var char = string[i];
if(charTracker.has(char)){
   charTracker.delete(char);
}else{
    charTracker.add(char);
}
}
return charTracker.size <= 1
}