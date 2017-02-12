//Array prototype concat.


var items = [2, 3];
var newItems = items.concat(3, 4, 5, [4, [7], 5]);
console.log(newItems);

//Use of ForEach fiunctionality

var people = [{
    name: "Sanal",
}, {
    name: "keerthi"
}]

people.forEach(function (e, i, arr) {
    console.log(e.name);
    console.log(i);
    console.log(arr)
});
// forEach pass a callback fucnction which will have the logic to what to do with each of the elements. (//eachelemnt, index, the whole array)

//using the this parameter forEach

//constructor fucnction

//write an Object oriented approch to add all values in an array

function Counter() {
    this.sum = 0;
    this.count = 0;
}

Counter.prototype = {
    add: function (array) {
        array.forEach(function (e) { //looping through the arrays
            this.sum += e; // addign the elemets and updateing the sum
            ++this.count; //take the total count 
        }, this); //passing the reference Object
        return this.sum;
    }
}

var sum1 = new Counter();
sum1.sum = 2;
console.log(sum1.add([1, 2, 3]));


/////////

//write a function to combine all the names in the Object array and print it  - use functional programming and avoif the for loop.


var Family = [{
    name: "Sanal",
}, {
    name: "keerthi"
}, {
    name: "Naina"
}];


var Family2 = [{
    name: "Salim",
}, {
    name: "Salila"
}, {
    name: "Salison"
}];

var array = ["a=4", "b=6"]
    //print names of all the fmily together
var Obj = {};
array.forEach(function (e, i) {
    var arr1 = e.split("=");
    Obj[arr1[0]] = arr1[1];
    return Obj;
});

console.log("MAP : " + array.reduce(function (e) {
    return e[0]
}), {});
//MAp is used to apply some kind of transformation to eveery element in an arrya and collect up the result in anaother array.



console.log(JSON.stringify(Obj));
/////// benefits of forEach is that it cna run asynchronously - but the for loop do not run asynchronosly.

//forEach to MAP

//use case for Array.prototype.Filter

var stocks = [{
    symbol: "XFX",
    price: 240.22,
    volume: 23432
}, {
    symbol: "XFX",
    price: 120.22,
    volume: 234
}, {
    symbol: "TNZ",
    price: 332.19,
    volume: 234
}]


function getStocksOver(stocks, limitPrice) {

    var finalStocks = [];

    stocks.forEach(function (e) {
        if (e.price > limitPrice)
            finalStocks.push(e.symbol);
    });

    return finalStocks;

}

function getStocksOverFilter(stocks, limitPrice) {

    return stocks.filter(function (e) {
        return e.price >= limitPrice
    }).map(function (e) {
        return e.symbol
    });

}

var expensiveStocks = getStocksOver(stocks, 200);
var expensiveStocksF = getStocksOverFilter(stocks, 200);

console.log(expensiveStocks);
console.log(expensiveStocksF);
expensiveStocksF.forEach(function (e) {
    return console.log(e)
});

var arrl = [
    [1, 2, 3],
    [2, 3]
];

//filter all non-zero ids form the array

var arr = [{
    id: 15
}, {
    id: -1
}, {
    id: 0
}, {
    id: 3
}, {
    id: 12.2
}, {}, {
    id: null
}, {
    id: NaN
}, {
    id: 'undefined'
}];

console.log(arr.filter(function (e) {
    return e.id > 0
}));

//add all values in an array:

var a = [1, 2, 5, 10];
var b = a.reduce(function (a, b, c, d) {
    console.log(a + "-" + b + "-" + c + "-" + d)
}, 1);


//closure

b = (function vari(a, b) {
    return function neyw() {
        console.log(a * b);
    }
})(2, 3);


b();


//Object oriented




//create a class to store data about a book and implement a method for displaying it.

//very generic way -- public
function Book(isbn, title, author) {
    this.setIsbn(isbn);
    this.setTitle(title);
    this.setAuthor(author);
}

Book.prototype = {
    setIsbn: function (isbn) {
        this._Isbn = isbn; //indication that this should not be set directly and it is used inside.
    },

    setTitle: function (title) {
        this._title = title;
    },

    setAuthor: function (author) {
        this._author = author;
    }

}

var theHobbit = new Book("100000", "The Hobbit", "Sanal Panicker");

console.log(theHobbit._title);
theHobbit.setTitle("The Rock");
console.log(theHobbit._title);






function interfaceOne() {

    return {
        getData: getData,
        getName: getName
    }

    function getData() {
        console.log("in getData");
    }

    function getName() {
        console.log("In Name");
    }
}

var Data1 = interfaceOne();
Data1.getData();

//calculate nfactorial

function _100fac() {
    var a = 1;
    i = 100;
    while (i > 1) {
        a = a * i;
        i--;
    }
    return a;
}

console.log(_100fac());

new Promise(function (resolve) {
    console.log('first');
    resolve();
    console.log('second');
}).then(function () {
    console.log('third');
});


///factorial in recurssion

function _factorial(num) {
    if (num === 0) {
        return 1;
    }
    return num * _factorial(num - 1)

}
console.log(_factorial(21));

//find greatest common divisor
var gcd = function (a, b) {
    console.log(a + " -- " + b);
    if (!b) {
        return a;
    }
    //console.log(a + " -- "+ b);
    return gcd(b, a % b);
};
console.log(gcd(7, 100));


//Quick Sort Algoritham

function QuickSort1(oArray) {
    if (oArray.length <= 1) {
        return oArray;
    } else {
        var left = [],
            right = [],
            newoArray = [],
            pivot = oArray.pop(),
            length = oArray.length;

        for (var i = 0; i < length; i++) {
            if (oArray[i] <= pivot) {
                left.push(oArray[i]);
            } else {
                right.push(oArray[i]);
            }
        }
        return newoArray.concat(QuickSort1(left), pivot, QuickSort1(right));
    }
}

console.log(QuickSort1([4, 6, 2, 5, 8, 5, 1, 1, 4]));


//MERGE SORT O(nlog n)
function merge_sort(left_part, right_part) {
    var result = [],
        il = 0,
        ir = 0;

    while (il < left_part.length && ir < right_part.length) {
        if (left_part[il] <= right_part[ir]) {
            result.push(left_part[il++]);
        } else {
            result.push(right_part[ir++]);
        }
    }
    return result.concat(left_part.slice(il), right_part.slice(ir));
}


function splitArr(array) {
    var half_length = Math.ceil(array.length / 2);
    var leftside = array.splice(0, half_length);
    leftside = leftside.sort();
    array = array.sort();
    console.log(merge_sort(leftside, array));
}



splitArr([1, 2, 3, 4, 5, 6, 7, 2, 3, 4, 6, 7]);


//Insertion Sort Algoritham


function insertion_sort(array){
   var len     = array.length,     // number of items in the array
        value,                      // the value currently being compared
        i,                          // index into unsorted section
        j;                          // index into sorted section

    for (i=0; i < len; i++) {
console.log("-in->"+j+"--"+i);
        // store the current value because it may shift later
        value = array[i];

        /*
         * Whenever the value in the sorted section is greater than the value
         * in the unsorted section, shift all items in the sorted section over
         * by one. This creates space in which to insert the value.
         */
        for (j=i-1; j > -1 &&  array[j] > value; j--) {
            console.log("-in for->"+j+"--"+i);
            array[j+1] = array[j];
        }

        array[j+1] = value;
    }

    return array;
}

console.log("***"+insertion_sort([3,2,4,6,8,3,1,9,3,6]));



//Find the smallest number

Array.prototype.fmin = function(){
    var smallest = this[0];
    for(var i = 0; i < this.length ; i++){
if(this[i] < smallest){
    smallest = this[i];
}
    }
    return smallest;
};

var arr1 = [1,4,6,7,3,4];
console.log(arr1.fmin());

//Selection Sort Algoritham


var Obj = {
    name : "Sanal",
    age : "29",
    height : "6"
}


function calcObj(obj){
    //setting couter
var count = 0, key;
    for(key in Obj){
        if(Obj.hasOwnProperty(key)){
            count ++;
        }
    }
    return count;
}

console.log("Object Length : " + calcObj(Obj));

//finf factorial of a number

//number is n --> n*(n-1)*(n-2)....1 = value

function findFactorial(num){
    
if(num === 0){
    return 1;
}
return num * findFactorial(num-1);
}

console.log("factorial : " + findFactorial(3));

//Write a JavaScript program to get the integers in range (x, y).

function findInt(a,b){

var arr = [];
arr.push(a);
return (function adder(a){
    console.log(a);
    a++;
   if(a <= b){
       console.log(a);
       var c = adder(a);
arr.push(c);
   }
return arr;
})(a);

};

console.log(findInt(1,10))