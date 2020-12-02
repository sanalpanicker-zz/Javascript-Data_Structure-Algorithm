const findValue = (a, val) => {
    const memoObj = {}
    let result = false;
    for (ele of a) {
        if (memoObj.hasOwnProperty(ele)) {
            result = [memoObj[ele], ele];
            break;
        } else {
            memoObj[val - ele] = ele;
        }
    }
    return result;
}

console.log(findValue([2, 4, 6, 8], 10))