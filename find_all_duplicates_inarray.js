//find all duplicatesIn array:

var input = [1, 2, 4, 4, 3, 1, 3, 1];

var duplicates = input.reduce(function(acc, el, i, arr) {
  if (arr.indexOf(el) !== i && acc.indexOf(el) < 0) acc.push(el); return acc;
}, []);

console.log(duplicates);

//difference between solice and slice
//why modulo?
