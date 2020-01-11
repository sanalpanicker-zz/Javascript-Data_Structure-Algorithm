// prinitng numbers slowly from 1 - n in step by step.
const printNumbers = n => {
  for (var i = 0; i < n; i++) {
    (i => {
      setTimeout(() => {
        console.log(i);
      }, i * 1000);
    })(i);
  }
};
printNumbers(10);
