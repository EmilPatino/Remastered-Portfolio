// An array with a for loop that randomly selects a letter.
var computerGuesses = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];

//An dynamic array that keeps user guesses
var guesses = []
 
// Variables to set the number of wins, loses, guesses, and guesses left.
var wins = 0;
var losses = 0;
var guessesLeft = 9;

// Variables that will refer to the HTML code by the IDs.
var winsText = document.getElementById("wins");
var lossesText = document.getElementById("losses");
var guessesText = document.getElementById("guesses");
var guessesLeftText = document.getElementById("guesses-left");

// On click that captures what was pressed but that limits it to only letters.
document.onkeyup = function (event) {
var userGuess = event.key;

// Randomly chooses a choice from the options array. This is the Computer's guess.
var computerGuess = computerGuesses[Math.floor(Math.random() * computerGuesses.length)];

//  If function that checks whether the user guess equals the computer guess and increases the win ticker and resets the user guess array
    if ((userGuess === computerGuess)) {
        wins++;
        guesses.splice(0,9);
        guessesLeft=9;
    } 

//Else statement that adds user guesses as a string in the user guess array and removes a guess left
    else {
        guesses.push(userGuess);
        guessesLeft--;

//Logic for losing and reseting the game.
    if ((guessesLeft === 0)) {
        losses++;
        guesses.splice(0,9);
        guessesLeft=9;
        }
    }

    // Display variables.
        winsText.textContent = " " + wins;
        lossesText.textContent = " " + losses;
        guessesText.textContent = " " + guesses;
        guessesLeftText.textContent = " " + guessesLeft;
      };