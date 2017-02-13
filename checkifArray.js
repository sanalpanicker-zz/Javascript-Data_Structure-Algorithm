function checkIfArray(input){


return Array.isArray(input);

}

console.log(checkIfArray("Hello boss"));
console.log(checkIfArray([1,2,3,4]));

//impleameting the isArray --> to Array object

Array.prototype.checkIfArrays = function(){

if(toString.call(this) === "[object Array]"){
    return true;
}
else{
    return false;
}

}
console.log([1,2,3,4].checkIfArrays());
console.log([1,2,3,4].checkIfArrays());