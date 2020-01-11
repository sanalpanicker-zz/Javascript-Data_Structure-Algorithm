//must watch : part 1 : https://www.youtube.com/watch?v=hRy6OQ6JKQ4
//Part 2: https://youtu.be/1aKjQ6Tvh2w


const nextPalindrome = n => {
  let palindrome;
  let length = n.length;
  let odd = length % 2 != 0;
  let centerIdex = Math.floor(length/ 2);
  let center = n[centerIdex];
  let left = n.slice(0, centerIdex);
  let right = left
    .split("")
    .reverse()
    .join("");

  if (odd) {
    palindrome = left + center + right;
    if (palindrome > n) {
      return palindrome;
    } else {
      if (center !== "9") {
        palindrome = left + ++center + right;
      }
    }
  } else {
    palindrome = left + right;
    if (palindrome > n) {
      return palindrome;
    } else {
      left++;
      right = left.toString()
        .split("")
        .reverse()
        .join("");
      palindrome = left + right;
    }
  }

///need to take care of conditions with 9

  return palindrome;

  //   const swapStarts = arr => {
  //     for (let i = 0; i < (arr.length - 1) / 2; i++) {
  //       arr[length - 1 - i] = arr[i];
  //     }
  //   };
  //   const numberArrCopy = [...numberArr];
  //   const length = numberArrCopy.length;
  //   if (length % 2 != 0) {

  //     const numberArrCopy1 = [...numberArr];
  //     //condition 1 swapping
  //     //12345 --> 12321
  //     //12345 --> 12421 //this is the right answer
  //     swapStarts(numberArrCopy);

  //     if (numberArrCopy1[(length - 1) / 2] !== "9") {
  //         numberArrCopy1[(length - 1) / 2]++;
  //       swapStarts(numberArrCopy1);
  //     }
  //     return numberArrCopy1 > numberArrCopy? numberArrCopy1 : numberArrCopy;
  //   }
  //   return numberArrCopy;
};

console.log(nextPalindrome("12431"));
