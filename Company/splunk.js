const items = [
    {color: 'red', type: 'tv', age: 18},
    {color: 'silver', type: 'phone', age: 20},
      {color: 'black', type: 'laptop', age: 25},
      {color: 'red', type: 'laptop', age: 30},
      {color: 'white', type: 'laptop', age: 20}, 
    ];
    
    const excludes = [
    {k: 'color', v: 'silver'},
    {k: 'type', v: 'tv'},
      {k: 'color', v: 'black'},
    ];
    
    const newExcludes = {
     color :   {silver : 1, black: 1},
     type : {tv: 1}
     }
    
    
    
    
    function excludeItems(items, excludes) {
      
      const newExcliudes = {};
      
      for(const eachEx of excludes){
        
        if(newExcliudes.hasownProperty(eachEx.k)){
           newExcliudes[eachEx.k][eachEx.v1] =1;
      }else{
            newExcliudes[eachEx.k] = {eachEx : 1};
      }
      }
      
      
     return items.filter((each, i)=>{
     
       newExcliudes.color.hasOwnProperty(each.color) || 
       newExcliudes.type.hasOwnProperty(each.type) ||
         newExcliudes.age.hasOwnProperty(each.age) ? false : true;
     
     })
     
       
    }