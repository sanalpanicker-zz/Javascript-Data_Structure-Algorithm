const convertRoman = n => {
  //not usong objects as the order cannot be preserved
  const intlookup = [100, 90, 50, 40, 10, 9, 5, 4, 1];
  const romanlookup = ["C", "XC", "L", "XL", "X", "IV", "V", "IV", "I"];
  let roman = "";
  //checking if the number is a whole interger throw error on strings and floats
  if (Number(n) === n && n % 1 === 0) {
    for (let num of intlookup) {
      while (n >= num) {
        roman = roman + romanlookup[intlookup.indexOf(num)];
        n = n - num;
      }
    }
    return roman;
  } 
  return "invalid input";
};
console.log(convertRoman(102));
