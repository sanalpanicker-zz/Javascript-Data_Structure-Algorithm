function wordMap(incoming_string) {


    var wordCounter = new Map();

    var wordArray = incoming_string.split('');

    wordArray.forEach(function (word) {
        if (wordCounter.has(word)) {
            wordCounter.set(word, wordCounter.get(word) + 1);
        } else {
            wordCounter.set(word, 1);
        }
    })

}