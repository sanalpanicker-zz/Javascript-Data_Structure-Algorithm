//https://www.geeksforgeeks.org/count-of-pairs-of-strings-which-differ-in-exactly-one-position/

const findStrings = (str1, wordArr) => {
    console.log(wordArr);
  const copyArr = [...wordArr];
  
  const resultArr = [];
  wordArr.forEach((word) => {
    let count = 0;
    [...str1].forEach((character, i) => {
      if (character === word[i]) {
        count++;
      }
    });
    if (count === (word.length - 1)) {
        resultArr.push(word);
        // wordArr.splice(i,1);
      }
  });
//   resultArr.forEach((word)=>{
//     return findStrings(word,wordArr);
//   })
  return resultArr;
};

console.log(findStrings("cat", ["cat", "dog", "car", "box", "bag", "bog", "bat"]));
