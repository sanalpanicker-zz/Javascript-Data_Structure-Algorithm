function removeDuplicates(input) {
  return input.filter((element, i) => {
    return input.indexOf(element) == i ? true : false;
  });
}
console.log(removeDuplicates([1, 1, 1, 1, 2, 3, 4, 5, 5, 5, 5, 6]));
