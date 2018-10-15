/**
*!------------------------------Array-----------------------------------
-it organizez items one after the another in the memory space
-posistion of an array hasan idex and it startes at 0

*?strenght:

 fast look up O(1) - getting values in a given index
 fast appends O(1) - Appending new element at the end of the array

*?weakness:

 constly inserts and deletes - worst case takes O(n)\
 Fixed Size - you need to specify the mempry block that needs to be allocated for the array

*? ways to initalize an Array in Javascript
 
let Arr =  ['a','b','c']; // best way to do it
let Arr =  new Array('a','b','c') // not recommeded

*? why is new Array() method not recommended

let Arr =  new Array(10,20) // geives you an array of 2 elements
let Arr = new Array(10) // gives you an array of 10 undefined values

*? how to determine if the variable is an Array

** typeof 
will return an Object

** Array.isArray 
will return true (Doesnt work in older browsers).

isArray = (x) => x.constructor.toString().indexOf('Array') > -1; can be used as a polyfill

** Instance of constructor 
will return true

eg: let Arr = ['s','d'];
Arr istanceOf Array => will return true
 */
