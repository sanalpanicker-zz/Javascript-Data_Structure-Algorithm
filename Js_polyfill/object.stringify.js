function stringify(value, replacer, spacer) {
  if (typeof value != "object" || value instanceof Array || value instanceof Date || value === null) {
    return helper(value);
  }
  return (
    "'{" +
    Object.keys(value)
      .map(k => {
        return `'${k}':${stringify(value[k])}`;
      })
      .join("") +
    "}'"
  );
}

function helper(value) {
    switch(typeof value){
        case 'string':
            return "'"+value+"'";
        case 'number':
        case 'boolean':
            if(isNaN(value) || !isFinite(value)) return 'null';
            return `'${value}'`;    
        case 'object':
            if(value === null)
                return 'null';
            else if(value instanceof Array)
                return "'[" + value.map((e)=> stringify(e)).join(',') + "]'";
            else if(value instanceof Date)
                return `${value.toISOString()}`;                      
    }
}


// console.log(typeof true);
// console.log(typeof null);
// console.log(['1','2'] instanceof Array);
// console.log(typeof {x:5,y:7});
// console.log()
console.log(stringify({}));                    // '{}'
console.log(stringify(true));                  // 'true'
console.log(stringify('foo'));                 // '"foo"'
console.log(stringify([1, 'false', false]));   // '[1,"false",false]'
console.log(stringify([NaN, null, Infinity])); // '[null,null,null]'
console.log(stringify({ x: {y:7}, y:[1,2,3] }));             // '{"x":5}'

console.log(stringify(new Date(2006, 0, 2, 15, 4, 5))); 
// // '"2006-01-02T15:04:05.000Z"'

// JSON.stringify({ x: 5, y: 6 });
// // '{"x":5,"y":6}'
// JSON.stringify([new Number(3), new String('false'), new Boolean(false)]);
// // '[3,"false",false]'

// // String-keyed array elements are not enumerable and make no sense in JSON
// let a = ['foo', 'bar'];
// a['baz'] = 'quux';      // a: [ 0: 'foo', 1: 'bar', baz: 'quux' ]
// JSON.stringify(a); 
// // '["foo","bar"]'

// JSON.stringify({ x: [10, undefined, function(){}, Symbol('')] }); 
// // '{"x":[10,null,null,null]}' 