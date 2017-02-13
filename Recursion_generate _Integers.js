function getRange(startnum,endnum){
//base case (2,3)
if(endnum - startnum === 1){
    return "no range";
}
//base case (2,4)
if(endnum - startnum === 2){
    return [startnum+1];
}
while(endnum > startnum){
var list = getRange(startnum,endnum-1);
list.push(endnum-1);
return list;
}
}
console.log(getRange(2,7));

