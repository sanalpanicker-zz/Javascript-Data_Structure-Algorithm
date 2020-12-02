
/**
 * merge sorted Array
 * writing an o(n+m) algo
 */
const mergeArray = (a1, a2) => {
    //2 pointers for 2 arrays
    let p1 = 0;
    let p2 = 0;
    const result = [];
    while (p1 < a1.length && p2 < a2.length) {
        if (a1[p1] < a2[p2]) {
            result.push(a1[p1]);
            p1++;
        }
        else {
            result.push(a2[p2]);
            p2++;
        }
    }
    //To fix test cases having list length thats being exhausted
    if (p1 <= (a1.length - 1)) {
        a1.splice(0, p1);
        result = result.concat(a1);
    } else if (p2 <= (a2.length - 1)) {
        a2.splice(0, p2);
        result = result.concat(a2);
    }
    return result;
}

console.log(mergeArray([1, 3, 5, 5], [2, 4, 6, 8]));