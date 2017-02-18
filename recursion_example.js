function recursion(input) {
    if (input <= 0)
        return 0;
    else {
        output = recursion(input - 1);
    }
    return output;
}
console.log(recursion(5));