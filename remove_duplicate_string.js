function remove_duplicate_string(string){

var finalStr = string[0];
string.split('').forEach(function(e){
if(finalStr.search(e) == -1){
finalStr+=e;
}
});
return finalStr;

}

console.log(remove_duplicate_string("SansAal"));