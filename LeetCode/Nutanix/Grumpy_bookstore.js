const maxCustomerAlgo = (superminutes, bookOwnerGrumpiness, customer) => {
  let happyCustomerCount = 0;
  for (let i = 0; i < bookOwnerGrumpiness.length; i++) {
    if (bookOwnerGrumpiness[i] == 0) {
        happyCustomerCount += customer[i];
      customer[i] = 0;
    }
  }
  let maxHappyCustomersArr =[];
  for (let j = 0; j <= customer.length - superminutes; j++) {
    let pointer = j;
    let sum =0;
    let i =0
    while (i < superminutes) {
      sum += customer[pointer];
      pointer++;
      i++;
    }
    maxHappyCustomersArr.push(sum);
  }
  console.log(customer);
  return Math.max(...maxHappyCustomersArr) + happyCustomerCount;
};

console.log(maxCustomerAlgo(3, [0,1,0,1,0,1,0,1], [1,0,1,2,1,1,7,5]));
