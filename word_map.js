function wordMap(incoming_string) {


    var wordCounter = new Map();
var counterArr=[];
    var wordArray = incoming_string.split('');

    wordArray.forEach(function (word) {
        if (wordCounter.has(word)) {
            wordCounter.set(word, wordCounter.get(word) + 1);
        } else {
            wordCounter.set(word, 1);
        }
    });

return Math.max.apply(null,wordCounter.keys());
// for(var [word, count] of wordCounter.entries()){
// if(count === 1){
//     return word;
// }

// }
// Object.keys(obj).reduce(function(a, b){ return obj[a] > obj[b] ? a : b });
}


console.log(wordMap("sanallllll"));