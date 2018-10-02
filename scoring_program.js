// You created a game that is more popular than Angry Birds.
// You rank players in the game from highest to lowest score. So far you're using an algorithm that sorts in O(n\lg{n})O(nlgn) time, but players are complaining that their rankings aren't updated fast enough. You need a faster sorting algorithm.

// Write a function that takes:

// an array of unsortedScores
// the highestPossibleScore in the game
// and returns a sorted array of scores in less than O(n\lg{n})O(nlgn) time.

// For example:

//   var unsortedScores = [37, 89, 41, 65, 91, 53];
// const HIGHEST_POSSIBLE_SCORE = 100;

// sortScores(unsortedScores, HIGHEST_POSSIBLE_SCORE);
// // returns [37, 41, 53, 65, 89, 91]


function sortScores(unsorted_score_List, max_value) {

//creating a score array with values representing no of times the score repeating and the position the score.
    var scoreCountsArray = new Array(max_value + 1).fill(0);
    // for (var i = 0; i < max_value + 1; i++) {
    //     //setting the count of each score to 0
    //     scoreCountsArray.push(0);
    // }

console.log(scoreCountsArray);    
    unsorted_score_List.forEach(function (eachScore) {
        scoreCountsArray[eachScore]++;
    })


    console.log(scoreCountsArray);
    var sortedScoreArray = [];
    scoreCountsArray.forEach(function (scoreCount, score) {
        console.log(scoreCount + " " + score);
        for (var times = 0; times < scoreCount; times++) {
            sortedScoreArray.push(score);
        }
    })
    return sortedScoreArray;
}

console.log(sortScores([4, 5, 2, 2, 2, 8, 1, 10], 10));