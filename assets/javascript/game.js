// WORD GUESS JS CODE

var wordBank = ["giraffe", "zebra", "lion", "elephant", "hyena", "antelope", "baboon"];
var randomWord = "";
var winsCount = 0;
var lossCount = 0;
var dashLines = [];
var wordLength = 0;
var lettersGuessed = [];
/* var rnum = Math.floor(Math.random() * wordBank.length);
randomWord = wordBank[rnum];
wordLength = randomWord.length; */


function newWord() {
    var rnum = Math.floor(Math.random() * wordBank.length);
    randomWord = wordBank[rnum];
    wordLength = randomWord.length;
}

newWord();

console.log("random word:")
console.log(randomWord)
console.log("word length:")
console.log(wordLength)

// event listeners

function makeDashes() {
    console.log(wordLength)
    for (var i = 0; i < wordLength; i++) {
        dashLines.push("_");
    }
}
makeDashes();
window.onload = function () {
    document.getElementById("wordToGuess").textContent = dashLines;
}

console.log(dashLines)




document.onkeyup = function () {
    var userGuess = event.key;
    lettersGuessed.push(userGuess)
    for (var i = 0; i < dashLines.length; i++) {
        if (userGuess == dashLines[i]){
            continue;
        }
    }
    for (var i = 0; i < wordLength; i++) {
        if (userGuess == randomWord.charAt(i)) {
            dashLines[i] = userGuess;
            console.log("dashlines array:")
            console.log(dashLines)
        }
    }

    

    if (dashLines.includes("_") === false) {
        winsCount++;
        console.log("winsCount: ")
        console.log(winsCount);
        dashLines = [];
        lettersGuessed = [];
        newWord();
        makeDashes();
    }

    document.getElementById("wordToGuess").textContent = dashLines;

    document.getElementById("youGuessed").textContent = lettersGuessed;

    document.getElementById("wins").textContent = "Wins: " + winsCount;

}

/* Things left to code: 
Get rid of commas from word to guess.
Correctly guessed letters should not appear under "Letters guessed"
Count down how many guesses are left.
*/