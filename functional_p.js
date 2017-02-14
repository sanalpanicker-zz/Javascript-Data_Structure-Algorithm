// given the following nested array (nesty) output a flattened array thusly ->
// [0,1,2,3,4,5,6,7,8,9]

const nesty = [0,1,2,[3,4,5],[[6],7,8],9];

const nativeFlatten = arr => {
  return arr.reduce((flat, toFlatten) => {
    return flat.concat(Array.isArray(toFlatten) ? nativeFlatten(toFlatten) :
    toFlatten);
  }, []);
}
nativeFlatten(nesty);

const rFlatten = R.reduce((a,b) => a.concat(Array.isArray(b) ? rFlatten(b) : b ), []);

rFlatten(nesty); //what is this witchery? (auto curried functions)

//will also accept loopy or old timey recursion for flatten

//write a function compose which takes two functions f and g  and returns
//a function which takes an argument and returns the application of f(g(x))
const compose = (f,g) => {
  return x => {
    return f(g(x));
  }
};

//refactor the following function which takes a list of
//objects containing fields a and b and returns a list
//of objects with fields theA and theB where b is less than 10

const things = [{a:1,b:33},{a:2, b:5},{a:6, b:7}];

function loopyT(things) {
  var accum = [];

  for (var i = 0; i < things.length; i++){
    if (things[i].b < 10) {
      var tmp = {theA: arr[i].a, theB: arr[i].b}
      accum.push(tmp);
    }
  }
  return accum;
}

// //this is acceptable
// const findAndProject = arr => {
//   return arr.map(o=>{return {theA: o.a, theB: o.b}; },
//     arr.filter(o => o < 10;));
// }
// //this makes me hot and bothered
// const filterer = R.filter(o => o.b < 10);
// const mapper = R.map(o => { return {theA: o.a, theB: o.b}; });
// const findAndProject = R.compose(mapper, filterer);