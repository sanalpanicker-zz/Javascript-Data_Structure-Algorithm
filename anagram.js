// Check whether two strings are anagram of each other

// Write a function to check whether two given strings are anagram of each other or not. An anagram of a string is another string that contains same characters, only the order of characters can be different. For example, “abcd” and “dabc” are anagram of each other.

// Approach

// 0) Case sensitive check
// 1) Get the strings sorted
// 2) Compare the strings and check if they are the same?

function anagramCheck(strA,strB){
var strAarr = strA.toLowerCase().split('').sort().join("");
var strBarr = strB.toLowerCase().split('').sort().join("");

if(strAarr === strBarr){
    console.log("Yes the strings are Anagram");
}
else{
    console.log("The strings are not anagram");
}

}

anagramCheck("owner","nerwO");