const findFerquent = arr => {
  const lookUp = {};
  let maxCount = 0,
    filterdElems = [];
  for (let each of arr) {
    if (lookUp.hasOwnProperty(each)) {
      lookUp[each]++;
    } else {
      lookUp[each] = 1;
    }

    //reutrn the most occuring, equally occusuring
    if (lookUp[each] > maxCount) {
      filterdElems[0] = each;
      maxCount = lookUp[each];
    } else if (lookUp[each] == maxCount) {
      filterdElems[1] = each;
    }
  }
  //return the least among that
  return Math.min(...filterdElems);
  //or sort it and shift the first one.
};

console.log(findFerquent([8, 8, 8, 1, 1, 1, 1, 3, 3, 3, 3, 4, 5, 6]));
