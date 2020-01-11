//what are higer order funtions :
//https://blog.bitsrc.io/understanding-higher-order-functions-in-javascript-75461803bad

//Create a map for each fucntion as a higher order function
// for each items return the length of items

const mapForEach = (arr, fn) =>{
const newItem = [];
    arr.forEach((item)=>{
        newItem.push(fn(item))
    })
    return newItem;
}

const arr = ['sanal', 'keerthi', 'naina', 'neil'];
const result = mapForEach(arr,(item)=>{
    return item.length;
})

console.log(result);

//adding a mapforEach to array prototype
Array.prototype.mapForEach = Array.prototype.mapForEach || function(fn){
    const newItem = [];
    this.forEach((item)=>{
        newItem.push(fn(item))
    })
    return newItem;
}
const arrNew = ['neil', 'sanal', 'naina', 'keerthi'];

const somearr = arrNew.mapForEach((element)=>{
return element.length *2;
})

console.log(somearr);