// Print Concatenation of Zig-Zag String in ‘n’ Rows
// Given a string and number of rows ‘n’. Print the string formed by concatenating n rows when input string is written in row-wise Zig-Zag fashion.

// Input: str = "ABCDEFGH"
//        n = 2
// Output: "ACEGBDFH"
// Explanation: Let us write input string in Zig-Zag fashion
//              in 2 rows.
// A   C   E   G
//   B   D   F   H
// Now concatenate the two rows and ignore spaces
// in every row. We get "ACEGBDFH"

// Input: str = "GEEKSFORGEEKS"
//        n = 3
// Output: GSGSEKFREKEOE
// Explanation: Let us write input string in Zig-Zag fashion
//              in 3 rows.
// G       S       G       S
//   E   K   F   R   E   K
//     E       O       E
// Now concatenate the two rows and ignore spaces
// in every row. We get "GSGSEKFREKEOE"

//https://www.youtube.com/watch?v=LhacuzXRVKI

const printZigZag = (input, row) => {
  const length = input.length; //length of the string
  //create multi dimeantional array and initialize based on the row size
  let result = Array(row)
    .fill(0)
    .map(arr => {
      return [];
    });
  console.table(result);
  let down = false;
  let rowPointer = 0;

  if (row <= 1) {
    return input;
  }
  for (let i = 0; i < length; i++) {
    result[rowPointer][i] = input[i];

    if (rowPointer == row - 1) {
      down = false;
    }

    if (rowPointer == 0) {
      down = true;
    }
    down ? rowPointer++ : rowPointer--;
  }

  return result;
};

console.table(printZigZag("GEEKSFORGEEKS", 3));

const answers = printZigZag("GEEKSFORGEEKS", 3).reduce((resArr, arr, i) => {
  const rarr = arr.filter(val => {
    return val !== "";
  });
  return resArr.concat(rarr);
}, []);
console.table(answers);
console.table(answers.join(""));

//much simpler solution - less space complexity

// var ln = str.length;
// var n = 3;
// if (n <= 1) {
// console.log(str)
// return;
// }

// var arr = [];
// var row = 0;
// var down = true;
// for (var i = 0; i < ln; i++) {
// i<=n ? arr.push(str[i])) : arr[row] = arr[row]+str[i]);

// if (row == n - 1) {
// down = false;
// } else if (row == 0) {
// down = true;
// }
// down ? row ++ : row--;
// }
// console.log(arr.join(''))
