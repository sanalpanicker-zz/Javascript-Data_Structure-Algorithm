//bitwise approach
function numberEven_or_Not(testNumber){
console.log(testNumber & 1);
return testNumber & 1 ? "odd" : "even";
}

console.log(numberEven_or_Not(6));