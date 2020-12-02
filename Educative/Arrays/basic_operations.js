const Arr = [1, 2, 3, 4, 5, 6, 6, 7, 8];
var AssArr = [];
Arr.push(5);
console.log(Arr);

Arr.pop();
console.log(Arr);

Arr.shift();
console.log(Arr);

Arr.unshift(2);
console.log(Arr);

// splice is inplace it performs the action on the Array
//The complexity of the splice() function is O(n). Since splice() add or remove elements in the original array. Therefore, in the worst-case, we have to shift n-1n−1 elements.
AssArr = Arr.splice(1, 4, 'Sanal', 'Keerthi', 'Naina', 'Neil');
console.log(`Arr splice: ${{ Arr }}`);
console.log(`AssArr splice: ${{ AssArr }}`);

// sliced and put it inot a new array and added new list elements into the poriginal Array
AssArr = Arr.splice(1, 4, 'john', 'doe', 'nancy', 'nolan');
console.log(Arr);
console.log(AssArr);
