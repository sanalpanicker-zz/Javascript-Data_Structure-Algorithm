const sorty = arr => {
  for (var j = 0; j < arr.length; j++) {
    for (var i = 0; i < arr.length - i - 1; i++) {
      // we dont have to interate the whole array - after the first sort the last element will be at the largest.
      if (arr[i] > arr[i + 1]) {
        let temp = arr[i];
        arr[i] = arr[i + 1];
        arr[i + 1] = temp;
      }
    }
  }
  return arr;
};

console.log(sorty([1, 5, 3, 4, 6, 2]));
// #Array #sorting #vanilla #array.sort