const removeEvenIn = (arr) => arr.filter((e) => e % 2 !== 0);

const oddArr = removeEvenIn([2, 3, 4, 5, 6, 7, 8, 9]);

console.log(oddArr);