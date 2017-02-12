var _3x3matrix = [
    [1,2,3],
    [4,5,6],
    [7,8,9]
];



function rotateMatrix(){
var matrixArray = _3x3matrix;
for(var i=0,l = matrixArray.length; i<l;i++){
for(var j=0;j<i;j++){
var temp = matrixArray[i][j];
matrixArray[i][j] = matrixArray[j][i];
 matrixArray[j][i] = temp; 
}
}
//before reversing
console.log(matrixArray);
return matrixArray.reverse();
}
console.log(_3x3matrix);
console.log(rotateMatrix());