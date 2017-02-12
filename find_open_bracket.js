
// I like parentheticals (a lot).
// "Sometimes (when I nest them (my parentheticals) too much (like this (and this))) they get confusing."

// Write a function that, given a sentence like the one above, along with the position of an opening parenthesis, finds the corresponding closing parenthesis.

// Example: if the example string above is input with the number 10 (position of the first parenthesis), the output should be 79 (position of the last parenthesis).


function findOpenParanthesis(string){
var openPCounter = 0;
var closingPcounterArr = [];
for(var i=0;i<string.length;i++){

if(string[i] == '('){
    openPCounter++;
}
else if(string[i] == ')'){
    if(openPCounter === 0){
        closingPcounterArr.push(i);
    }else{
        openPCounter --;
    }
}
}
return closingPcounterArr;
}

console.log(findOpenParanthesis("Hey how ( di y)ou do ))"))