function findExponent(base, exponent) {
    if (exp === 0)
        return 1;
    else
        return base * findExponent(base, exponent - 1);
}