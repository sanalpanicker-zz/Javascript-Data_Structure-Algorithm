//creating a library
(function(window){
    //I recommend this
    'use strict';
    function define_library(){
        var Library = {};
        var name = "Timmy";
        Library.greet = function(){
            alert("Hello from the " + name + " library.");
        }
        return Library;
    }
    //define globally if it doesn't already exist
    if(typeof(Library) === 'undefined'){
        window.Library = define_Library();
    }
    else{
        console.log("Library already defined.");
    }
})(window);

//instead of creating a library like this
var Library = {
    name: "Timmy",
    greet: function(){
        alert("Hello from the " + Library.name + " library.");
    }
}

//starting a js file to onload:init(); --> basic JS file.
(function(){
window.init = function(){
//private functions
}
})();
//do not use the object literal approch for creating lib use the factory design pattern where ever applicable.