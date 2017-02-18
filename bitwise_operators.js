// variables
var a = 5;
var b = 5;

// a | b - OR
// if in any of the given numbers corresponding bit 
// is '1', then the result is '1'
console.log('or', b|a); // 13

// a & b - AND
// if in both of the given numbers corresponding bit 
// is '1', then the result is '1'
console.log('and', a&b); // 5 

// a ^ b - XOR
// if in one of the given numbers (not both) 
// corresponding bit is '1', then the result is '1'
console.log('xor', a^b); // 8

// ~a - NOT
// inverts all the bits
console.log('not', ~a); // -6

// a >> b - RIGHT SHIFT
// shift binary representation of 'a' for 'b' 
// bits to the right, discarding bits shifted off
console.log('rs', a>>b); // 0

// a << b - LEFT SHIFT
// shift binary representation of 'a' for 'b' 
// bits to the right, shifting in zeros from the right
console.log('ls', a<<b); // 40960

// a >>> b - ZERO FILLED RIGHT SHIFT
// shift binary representation of 'a' for 'b' 
// bits to the right, discarding bits shifted off, 
// and shifting in zeros from the left.
console.log('zfrs', a>>>b); // 0