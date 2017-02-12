//Check if all stringa are unique - do it inline

function checkIsUniqe(incoming_string){
var checkerObj = {}; 
//O(n) Space complexity
//O(n) Time complexity
for(var chars=0,length = incoming_string.length;chars<length;chars++){

    if(checkerObj[incoming_string[chars]]){
        return false;
    }else{
        checkerObj[incoming_string[chars]] = true;
    }
}
 return true;
}
console.log(checkIsUniqe("helBo"));