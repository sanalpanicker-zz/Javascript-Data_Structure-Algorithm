function fibNthValue(n){

if(n <= 2){
    return 1;
}
return fibNthValue(n-1)+fibNthValue(n-2);
}

console.log(fibNthValue(7));