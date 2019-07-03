http://www.ritambhara.in/islands-in-a-two-dimensional-array/



[[1, 0, 1]
[0, X, X]
[0, X, X]
]

//2
[0][0], [0][3]

let findIslandsInMatri = (array) => {

  let noOfIslands = 0;
  let row = array.length;
  let coloumn = array[0].length;

  for (let i = 0; i < row; i++) {
    for (let j = 0; j < coloumn; j++) {
      //00
      if (array[i][j] === 1) {


        noOfIslands++;
        groupIsland(array, i, j);//02

      }

    }

  }

}

const groupIsland = (arr, i, j) => {

  arr[i][j] = "X";//02

  if (i - 1 >= 0) {//exits for 1st
    if (arr[i - 1][j] === 1) {//row back
      groupIsland(arr, i - 1, j);
    }
    if (j - 1 >= 0 && arr[i - 1][j - 1] === 1) {
      groupIsland(arr, i - 1, j - 1);
    }
  }

  if (i + 1 < array.length) {
    if (arr[i + 1][j] == 1) {
      groupIsland(arr, i + 1, j);
    }
    if (arr[i + 1][j - 1] == 1) {
      groupIsland(arr, i + 1, j);
    }
    if (arr[i + 1][j + 1] == 1) {
      groupIsland(arr, i + 1, j);
    }
  }

  if (j - 1 >= 0) {
    if (arr[i][j - 1] === 1) {//row back
      groupIsland(arr, i, j - 1);
    }

  }
}
