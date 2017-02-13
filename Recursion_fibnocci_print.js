function fibSeries(n){
var list = [1,1];
for(var i=2;i<n;i++){
    list.push(list[i-1]+list[i-2]);
}
return list;
}

console.log(fibSeries(5));