$(document).ready(function() {

    // Initial array of letters to dynamically create buttons on the screen.
    var letters = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
    // Create a for-loop to iterate through the letters array.
    for (var i = 0; i < letters.length; i++) {
      // Create a variable named "letterBtn" equal to $("<button>");
      var letterBtn = $("<button>");
      // Add classes for CSS
      letterBtn.addClass("letter-button letter letter-button-color");
      // For each "letterBtn" a data-attribute called "data-letter".
      letterBtn.attr("data-letter", letters[i]);
      // For each "letterBtns" a text equal to "letters[i]".
      letterBtn.text(letters[i]);
      // Append each "letterBtn" to the "#buttons" div (provided).
      $("#buttons").append(letterBtn);

    }

    // On click that captures what was pressed but that limits it to only letters.
$(".letter-button").on("click", function() {
    var userGuess = " " + ($(this).attr("data-letter")) + " ";
            if (userGuess === " " + computerGuess + " ") {
            wins++;
            guesses.splice(0,9);
            guessesLeft=9;
            $("#success").empty();
            $("#failure").empty();
            var successPop = $("<div>");
            successPop.addClass("alert alert-success alert-dismissible");
            var successText = $("<a>");
            successText.addClass("close")
            successText.attr("data-dismiss", "alert");
            successText.html("&times;");
            var successDialog = $("<p>");
            successDialog.text("You are one step closer to becoming the Psychic's apprentice.");
            (successPop).append(successText);
            (successPop).append(successDialog);
            $("#success").append(successPop);
            guessfunc();
        } 
        else {
            guesses.push(userGuess);
            guessesLeft--;
        if ((guessesLeft === 0)) {
            losses++;
            guesses.splice(0,9);
            guessesLeft=9;
            guessfunc();
            $("#success").empty();
            $("#failure").empty();
            var failurePop = $("<div>");
            failurePop.addClass("alert alert-danger alert-dismissible");
            var failureText = $("<a>");
            failureText.addClass("close")
            failureText.attr("data-dismiss", "alert");
            failureText.html("&times;");
            var failureDialog = $("<p>");
            failureDialog.text("The Psychic sensed you didn't have the sight...");
            (failurePop).append(failureText);
            (failurePop).append(failureDialog);
            $("#failure").append(failurePop);
            }
        }
            winsText.textContent = " " + wins;
            lossesText.textContent = " " + losses;
            guessesText.textContent = " " + guesses;
            guessesLeftText.textContent = " " + guessesLeft;
          });
  });


function myFunction() {
    $("#myForm")[0].reset();
  }

// An array with a for loop that randomly selects a letter.

var computerGuesses = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];

//An dynamic array that keeps user guesses
var guesses = [];
var computerGuess = [];
// Variables to set the number of wins, loses, guesses, and guesses left.
var wins = 0;
var losses = 0;
var guessesLeft = 9;

function guessfunc() {
    // Randomly chooses a choice from the options array. This is the Computer's guess.
    computerGuess = computerGuesses[Math.floor(Math.random() * computerGuesses.length)];
    console.log(computerGuess);
  }

// Variables that will refer to the HTML code by the IDs.
var winsText = document.getElementById("wins");
var lossesText = document.getElementById("losses");
var guessesText = document.getElementById("guesses");
var guessesLeftText = document.getElementById("guesses-left");

// On click that captures what was pressed but that limits it to only letters.
document.onkeyup = function (event) {
var userGuess = " " + event.key + " ";

//  If function that checks whether the user guess equals the computer guess and increases the win ticker and resets the user guess array
    if (userGuess === " " + computerGuess + " ") {
        wins++;
        guesses.splice(0,9);
        guessesLeft=9;
        

        //Dynamically create alert box
        $("#success").empty();
        $("#failure").empty();
        var successPop = $("<div>");
        successPop.addClass("alert alert-success alert-dismissible");
        var successText = $("<a>");
        successText.addClass("close")
        successText.attr("data-dismiss", "alert");
        successText.html("&times;");
        var successDialog = $("<p>");
        successDialog.text("You are one step closer to becoming the Psychic's apprentice.");
        (successPop).append(successText);
        (successPop).append(successDialog);
        $("#success").append(successPop);

        guessfunc();
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
        //Run  computer guess function
        guessfunc();

        //Dynamically create alert box
        $("#success").empty();
        $("#failure").empty();
        var failurePop = $("<div>");
        failurePop.addClass("alert alert-danger alert-dismissible");
        var failureText = $("<a>");
        failureText.addClass("close")
        failureText.attr("data-dismiss", "alert");
        failureText.html("&times;");
        var failureDialog = $("<p>");
        failureDialog.text("The Psychic sensed you didn't have the sight...");
        (failurePop).append(failureText);
        (failurePop).append(failureDialog);
        $("#failure").append(failurePop);
        }
    }

    // Display variables.
        winsText.textContent = " " + wins;
        lossesText.textContent = " " + losses;
        guessesText.textContent = " " + guesses;
        guessesLeftText.textContent = " " + guessesLeft;
      };