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



// function remove_duplicate_string(string){

//     var finalStr = [];
//     string.split('').forEach(function(e,i){
//     if(string.indexOf(e) == i){
//         finalStr.push(e);
//     }
//     });
//     return finalStr.join('');
    
//     }
    
//     console.log(remove_duplicate_string("SansAal"));
//functional programming

function remove_duplicate_string_filter(string){
var arra = string.split('');
return arra.filter(function(char,position){
 return arra.indexOf(char) == position;
}).join('');

}

console.log(remove_duplicate_string_filter("SansAal"));