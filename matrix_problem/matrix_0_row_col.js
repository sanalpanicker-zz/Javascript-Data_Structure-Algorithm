var setZeroes = function(matrix) {
  arr = [];
  memo = {};
  for (let row = 0; row < matrix.length; row += 1) {
    for (let col = 0; col < matrix[row].length; col += 1) {
      if (matrix[row][col] === 0) {
        arr.push([row, col]);
      }
    }
  }

  for (let change of arr) {
    helper(change);
  }

  function helper(change) {
    let [row, col] = change;
    if (!memo.hasOwnProperty(`${row}+"_"+${col}`)) {
      memo[row + "_" + col] = 0;
      for (let i = 0; i < matrix.length; i += 1) {
        matrix[i][col] = 0;
      }
      for (let j = 0; j < matrix[0].length; j += 1) {
        matrix[row][j] = 0;
      }
    }
  }
  return matrix;
};

console.table(setZeroes([[1, 3, 4], [1, 0, 1], [1, 3, 4], [1, 7, 0]]));
