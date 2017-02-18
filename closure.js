function c(a) {
    return function (b) {
        return function (c) {
            return a * b * c;
        };
    };
}
console.log(c(3)(4)(5));


a= [1,2,3,4,5];
a.length = 0;
console.log(a);
