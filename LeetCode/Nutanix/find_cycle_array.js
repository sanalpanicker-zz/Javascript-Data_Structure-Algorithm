
//taken from a java based solution
const findCycle = nums => {
  if (nums == null || nums.length < 1) return false;
//get the array length
  let N = nums.length;

  //fucntion to find if there is a cycle involved
  const cycleFound = from => {
    let i = from;
    let cyclelength = 0;
    let foundCycle = false;
    //check if the pointer is moving forward.
    const forwardDirection = nums[i] > 0;

    while (cyclelength < N) {
      //As the array is looped and we can have +ve -ve values  
      i = Math.floor((nums[i] + i) % N);
      if (i < 0) {
        i = N + i;
      }
      // check if the next pointer is moving forward/backwards
      let newForwardDirection = nums[i] > 0;
      //make sure the runner is going in the same direction, if its opposite then there is no cycle.
      if (newForwardDirection != forwardDirection) {
        return false;
      }
      // if the initail and runner pointers meet
      if (from == i) {
        foundCycle = true;
        break;
      }
      cyclelength++;
    }
    return foundCycle && cyclelength >= 1 && Math.abs(from - i) != 1;
  };

  //loop through the array, one index at a time
  for (let i = 0; i < N; i++) {
    if (cycleFound(i)) return true;
  }
  return false;
};
console.log(findCycle([1,2,-1,3]));
