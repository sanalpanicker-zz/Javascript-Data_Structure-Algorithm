// Write a recursive function for generating all permutations of an input string. Return them as a set.
// Don't worry about time or space complexity—if we wanted efficiency we'd write an iterative version.

// To start, assume every character in the input string is unique.

// Your function can have loops—it just needs to also be recursive.


//   function getPermutations(string) {

//     // base case
//     if (string.length <= 1) {
//         return new Set(string);
//     }

//     var allCharsExceptLast = string.slice(0, -1);
//     var lastChar = string[string.length - 1];

//     // recursive call: get all possible permutations for all chars except last
//     var permutationsOfAllCharsExceptLast = getPermutations(allCharsExceptLast);
// console.log(permutationsOfAllCharsExceptLast);
//     // put the last char in all possible positions for each of the above permutations
//     var permutations = new Set();
//     permutationsOfAllCharsExceptLast.forEach(function(permutationOfAllCharsExceptLast) {
//         for (var position = 0; position <= allCharsExceptLast.length; position++) {
//             var permutation = permutationOfAllCharsExceptLast.slice(0, position) + lastChar + permutationOfAllCharsExceptLast.slice(position);
//             permutations.add(permutation);
//         }
//     });

//     return permutations;
// }


console.table(permut("Sanal"));


function permut(string) {
    if (string.length < 2) return string; // This is our break condition

    var permutations = []; // This array will hold our permutations

    for (var i=0; i<string.length; i++) {
        var char = string[i];

        // Cause we don't want any duplicates:
        if (string.indexOf(char) != i) // if char was used already
            continue;           // skip it this time

        var remainingString = string.slice(0,i) + string.slice(i+1,string.length); //Note: you can concat Strings via '+' in JS

        for (var subPermutation of permut(remainingString))
            permutations.push(char + subPermutation)

    }
    return permutations;
}