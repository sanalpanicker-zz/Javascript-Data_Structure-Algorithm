'cat', 'dog', ['cat', 'dog', 'car', 'box', 'bag', 'bog', 'bat', ...]
[ 'car', 'box', 'bag', 'bog', 'bat', ...]
cat -> bat -> bag -> bog -> dog => 4

'cat', 'bar'
cat -> car -> bar
cat -> bat -> bar

'cat' -> car
      -> bat
      
      car -> dog
      bat -> dog
      
      cat = [car, bat]
      [bag]
      
//      dog =[bog]

const compare= (start, end, arr)=>{
    
    const copyArr = arr;
    
    arr.filter((e)=>{
        resultArr = [];
       e.forEach((c,i)=>{
           let rest = c.splice(i,0);
           if(arr.includes(rest))
           resultArr.push();
       })
    })
    
    
}
      