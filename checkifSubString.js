//using String.prototype.seacrh
//it returns -1 if not found; >1 if the value is there
function isSubString(str1,str2){
if(str1.search(str2) != -1){
    return true;
}
else return false;
}

//using String.prototype.include --> ES6
//includes return true/false;
function isSubString_Include(str1,str2){
return str1.includes(str2);
}

//Test cases
console.log(isSubString("Hello world","wor"));
console.log(isSubString("Hello world","worf"));

console.log(isSubString_Include("Hello world","wor"));
console.log(isSubString_Include("Hello world","worf"));