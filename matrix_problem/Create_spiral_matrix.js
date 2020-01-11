//matrix size 4

// ┌─────────┬────┬────┬────┬───┐
// │ (index) │ 0  │ 1  │ 2  │ 3 │
// ├─────────┼────┼────┼────┼───┤
// │    0    │ 1  │ 2  │ 3  │ 4 │
// │    1    │ 12 │ 13 │ 14 │ 5 │
// │    2    │ 11 │ 16 │ 15 │ 6 │
// │    3    │ 10 │ 9  │ 8  │ 7 │
// └─────────┴────┴────┴────┴───┘


const createSpiral = (matrixSize)=>{
let n = matrixSize;
if(matrixSize <= 1){
    return [1];
}
    //crate a 2 dimetional array based on matrixSize
 let  resultArr = new Array(n).fill([]).map((e)=>(new Array(n).fill('')))

console.table(resultArr);
let counter = 1;
let startRow = 0;
let startCol =0;
let endRow = n-1;
let endCol = n-1;

while(startRow <= endRow && startCol <= endCol){
for(let i =startCol ; i <= endCol; i++ ){
    resultArr[startRow][i] = counter;
    counter++;
}
startRow++;

for (let i = startRow; i<= endRow; i++){
    resultArr[i][endCol] = counter;
    counter++;
}
endCol--;

for(let i = endCol; i>= startCol; i--){
    resultArr[endRow][i] = counter;
    counter++;
}
endRow--;


for(let i = endRow; i>= startRow; i--){
    resultArr[i][startCol]= counter;
    counter++;
}
startCol++;
};

return resultArr;
}

console.table(createSpiral(4));