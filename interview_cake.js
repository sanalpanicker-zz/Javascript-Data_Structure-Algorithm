console.log("Hello World!");


//find the change possibilites for 100$ [20$,50$].
//4 -20$
//2-50$


function changePossibilitiesTopDown(amountLeft, denominations, currentIndex) {
    currentIndex = currentIndex || 0;

    // base cases:
    // we hit the amount spot on. yes!
    if (amountLeft === 0) return 1;

    // we overshot the amount left (used too many coins)
    if (amountLeft < 0) return 0;

    // we're out of denominations
    if (currentIndex === denominations.length) return 0;

    console.log('checking ways to make ' + amountLeft + ' with ' + denominations.slice(currentIndex));

    // choose a current coin
    var currentCoin = denominations[currentIndex];

    // see how many possibilities we can get
    // for each number of times to use currentCoin
    var numPossibilities = 0;
    while (amountLeft >= 0) {
        numPossibilities += changePossibilitiesTopDown(amountLeft,
            denominations, currentIndex + 1);
        amountLeft -= currentCoin;
    }

    return numPossibilities;
}

console.log(changePossibilitiesTopDown(100,['20','50']));

//find the nth fibnocci series
4
//0 1 1 2 3 5 8 13
//fib(n) = fib(n-1) + fib(n-2);

//any recursive function has a base case and a recursive case

//fib(n-1) + fib(n-2) [ 1, 2, 1, 3, 1, 2, 5 ]

var memo = {};

function fib(n){
if(n== 0  || n==1){
    return n;
}
if(memo.hasOwnProperty(n)){
    return memo[n];
}
var result =  fib(n-1)+fib(n-2);
memo[n] = result;
return result;

}

console.log("*< fib series >* --> "+fib(1000));

//how to make it to O(n):

//lets take the bottom up approch thats we build the F serices from 0---- n :)

function tdfibbo(n){

var Prev_2 = 0;
var Prev = 1;

for(var i=2;i<=n;i++){
current = Prev + Prev_2;

Prev_2 = Prev;
Prev = current;

}

return current;



}
console.log("< tdfibbo > "+ tdfibbo(1000));


//print fibnocci numbers

function printFib(n){          

var fib = [0,1];

for(var i =2;i<=n;i++){

    fib[i] = fib[i-1]+fib[i-2];
}

return fib;
}

console.log(printFib(10));

//the above method is not ver effective as if the number goes up O(n2) which means that its very ineffective

//how can we improve it.

//