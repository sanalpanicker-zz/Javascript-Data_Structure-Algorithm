function replaceSurrounded(matrix) {
  let startRow = 0,
    endRow = matrix.length - 1,
    startCol = 0,
    endCol = matrix[0].length - 1;

  const fillSelfandNeighbour = (input, x, y, initialVal, nextVal) => {
    if (x < 0 || x >= input.length || (y < 0 || y >= input[0].length)) return;

    if (input[x][y] != initialVal) return;

    input[x][y] = nextVal;
    //replace all adjacent Os with -
    fillSelfandNeighbour(input, x + 1, y, initialVal, nextVal);
    fillSelfandNeighbour(input, x - 1, y, initialVal, nextVal);
    fillSelfandNeighbour(input, x, y + 1, initialVal, nextVal);
    fillSelfandNeighbour(input, x, y - 1, initialVal, nextVal);
  };
  //walk through the boundary to find if any O, id there is replace them and their surrounding o with -
  //top boundary
  for (let i = startCol; i <= endCol; i++) {
    if (matrix[startRow][i] === "O") {
      fillSelfandNeighbour(matrix, startRow, i, "O", "-");
    }
  }
  // right boundry
  for (let i = startRow + 1; i <= endRow; i++) {
    if (matrix[i][endCol] === "O") {
      fillSelfandNeighbour(matrix, i, endCol, "O", "-");
    }
  }
  // bottom boundry
  for (let i = startCol; i <= endCol - 1; i++) {
    if (matrix[endRow][i] === "O") {
      fillSelfandNeighbour(matrix, endRow, i, "O", "-");
    }
  }
  // left boundary
  for (let i = startRow + 1; i <= endRow - 1; i++) {
    if (matrix[i][startCol] === "O") {
      fillSelfandNeighbour(matrix, i, startCol, "O", "-");
    }
  }

  return matrix.map(array => {
    return array.map(e => {
      if (e == "O") {
        return "X";
      } else if (e == "-") {
        return "O";
      } else return e;
    });
  });
}

// const inputArr = [
//   ["X", "O", "X", "O", "X", "X"],
//   ["X", "O", "X", "X", "O", "X"],
//   ["X", "X", "X", "O", "X", "X"],
//   ["O", "X", "X", "X", "X", "X"],
//   ["X", "X", "X", "O", "X", "O"],
//   ["O", "O", "X", "O", "O", "O"]
// ];

// const inputArr = [
//     ["X", "X", "X", "X", "X", "X"],
//     ["X", "O", "X", "X", "O", "X"],
//     ["X", "X", "X", "O", "X", "X"],
//     ["X", "X", "X", "X", "X", "X"],
//     ["X", "X", "X", "O", "X", "O"],
//     ["X", "O", "X", "X", "X", "X"]
//   ];

  const inputArr =  
  [
      ["X","X","X","X"],
      ["X","O","O","X"],
      ["X","X","O","X"],
      ["X","O","X","X"]
    ]
console.table(replaceSurrounded(inputArr));
