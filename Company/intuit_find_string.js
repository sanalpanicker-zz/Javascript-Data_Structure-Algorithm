const findWords = matrix => {
  let j = 0;

  while (j < matrix.length) {
    let str1 = "",
      str2 = "";
    for (let i = 0; i < matrix.length; i++) {
      str1 += matrix[j][i];
    }

    for (let i = 0; i < matrix.length; i++) {
      str2 += matrix[i][j];
    }
    console.log(str1, str2);
    if (str1 !== str2) {
      return false;
    }
    j++;
  }

  return true;
};

const matrix = [["A", "T", "E"], ["T", "E", "A"], ["E", "A", "T"]];

console.log(findWords(matrix));
//find words //matrix //intuit