let reUsableMultiplier = (mul) => {
    return (n) => {
        return mul * n;
    }
}



let mul2 = reUsableMultiplier(2);
console.log(mul2(5));
console.log(mul2(6));
console.log(mul2(7));

let mul5 = reUsableMultiplier(5);
console.log(mul5(5));
console.log(mul5(6));
console.log(mul5(7));