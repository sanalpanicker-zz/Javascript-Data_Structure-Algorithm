  function findUniqueDeliveryId(deliveryIds) {

    var uniqueDeliveryId = 0;

    deliveryIds.forEach(function(deliveryId) {
        console.log("uniqueDeliveryId--> "+uniqueDeliveryId);
       uniqueDeliveryId ^= deliveryId;

               console.log("uniqueDeliveryId-2-> "+uniqueDeliveryId);

    });

    return uniqueDeliveryId;
}

console.log(findUniqueDeliveryId([2,1,3,4,5,5,2,1,3]));