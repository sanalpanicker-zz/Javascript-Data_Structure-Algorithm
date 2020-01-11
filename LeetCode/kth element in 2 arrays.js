const findkth = (a1, a2, kth, isSorted) => {
  let newarr = [];
  const alength = a1.length,
    a2length = a2.length;
  if (kth <= alength) {
    return a1[kth - 1];
  } else if (kth <= alength + a2length) {
    if (!isSorted) {
      newarr = a1.concat(a2).sort((a, b) => {
        return b - a;
      });
    } else {
        newarr = a1.concat(a2);
    }
  }
  console.log(newarr);
  return newarr[kth - 1];
};

console.log(findkth([1, 2, 3, 4, 5], [6, 7, 8, 9], 2, true));

console.log(findkth([12, 4, 6, 2, 1], [45, 12, 4, 5], 2, false));
