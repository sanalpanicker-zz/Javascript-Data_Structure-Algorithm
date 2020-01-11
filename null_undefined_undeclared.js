var too;
var foo;
console.log(foo); //undefined
console.log(typeof foo); //undefined

var bar = null;
console.log(bar); //null
console.log(typeof bar); //object

console.log(too); //undefined
console.log(typeof too); //undefined

//poo undeclared error
console.log(typeof poo); //undefined

bar == too? console.log("null and undefined passes equality check") : console.log("null and undefined DONT passes equality check");
bar === too? console.log("null and undefined passes equality and type check") : console.log("null and undefined NEVER passes equality and type check");

var poo = undefined;
console.log(typeof poo); //undefined