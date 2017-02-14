function combineObject() {

    if(arguments){
    var l = arguments.length;
    var resultObj = {};
    for (var i = 0; i < l; i++) {
        for (var objProp in arguments[i]) {
            if (arguments[i].hasOwnProperty(objProp)) {
                resultObj[objProp] = arguments[i][objProp];
            }
        }
    }
    return resultObj;
    }else{
        return "No Object supplied to combine";
    }
}

var obj1 = {
    a:"HeyA"
}
var obj2 = {
    b:"HeyB"
}
var obj3 = {
    c:"HeyC"
}
console.log(combineObject(obj1,obj2,obj3));