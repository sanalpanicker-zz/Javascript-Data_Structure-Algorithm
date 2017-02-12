function findUniqueDeliveryId(deliveryIds){


var idsToOccurance =  new Map();

deliveryIds.forEach(function(deliveryIds){

if(idsToOccurance.has(deliveryIds)){
    idsToOccurance.set(deliveryIds,idsToOccurance.get(deliveryIds)+1 );
}
else{
    idsToOccurance.set(deliveryIds,1);
}
});


for(var[deliveryID,count] of idsToOccurance){
if(count === 1){
    return deliveryID;
}

}





}