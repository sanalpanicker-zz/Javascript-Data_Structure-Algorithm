//   */Anagram Groups
// Given a list of words, return an array of arrays consisting of the groups of words that are anagrams of each other.

// Input: words , Array of Strings, [String]
// Output: Array of Array of Strings, [[String]]

// Example
// Input:
// ["eat", "tea", "tan", "ate", "nat", "bat"]

// a: len of array
// s: len of longest string

// O(a * s log(s))

// Output:
// [
//   ["ate","eat","tea"],
//   ["nat","tan"],
//   ["bat"]
// ]

const findAnagramGroup = arr => {
  const map = {};
  arr.forEach(element => {
      //instead of calling the sort we can also call the genKey(look below)
    let sorterdElem = element.split('').sort().join('');
    if (map.hasOwnProperty(sorterdElem)) map[sorterdElem].push(element);
    else map[sorterdElem] = [element];
  });
  return Object.values(map);
};
console.log(findAnagramGroup(["eat", "tea", "tan", "ate", "nat", "bat"]));


//to create unique prime number hash map for letters
// multiplication of 2 unique prime numbers will alwas give a unique number.

function assignCharsToPrimes(){
    let primes = [2, 3, 5, 7, 11, 13, 17, 19, 23, 29, 31, 37, 41, 43, 47, 53, 59, 61, 67, 71, 73, 79, 83, 89, 97, 101]
    let chars = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z']
    let zip = {};
    chars.forEach((char, index) => {
      zip[char] = primes[index]
    })
    return zip;
  }

//generate unique keys for hashmap
  function genKey(str) {
    return str.split("").reduce((a, b) => (a * primes[b]), 1);
  }