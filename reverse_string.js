// Write a function to reverse a string in-place ↴ .
// Since strings in JavaScript are immutable ↴ , first convert the string into an array of characters, do the in-place reversal on that array, and re-join that array into a string before returning it. This isn't technically "in-place" and the array of characters will cost O(n)O(n) additional space, but it's a reasonable way to stay within the spirit of the challenge. If you're comfortable coding in a language with mutable strings, that'd be even better!


function reverseString(stringToBeReversed){
//string is immutable so we need to move it into an array to perform the sorting
var stringArray = stringToBeReversed.split('');
for(var i=0,l=stringArray.length-1;i< l/2;i++){
var tempStorage = stringArray[i];
stringArray[i] = stringArray[l-i];
stringArray[l-i] = tempStorage;
}

return stringArray.join('');

}

console.log(reverseString("Sana"));