$(document).ready(function(){

//Variables for right, wrong, and no answer
var right = 0;
var wrong = 0;
var noanswer = 0;    

//Seconds Given
var number = 30;

//  Variable for interval ID
var intervalId;

//  Button to kick off start function
$("#start").on("click", start);

//Start function
function start() {
  clearInterval(intervalId);
  intervalId = setInterval(decrement, 1000);
}

//  Decrement function
function decrement() {

  //  Down tick one second
  number--;

  //  Show number in HTML
  $("#time-left").html("<h2> Time Remaining: " + number + "</h2>");


  //  What happens once it hits 0
  if (number === 0) {

    //  Run  stop function
    stop();
    
    //  Alert the user that time is up and provide score
    alert("Time Up!");

    //Var for each value of an answer
    schmeckle = $("input[name='schmeckle']:checked").val();
    console.log(schmeckle);
    wubba = $("input[name='wubba']:checked").val();
    console.log(wubba);
    blitz = $("input[name='blitz']:checked").val();
    console.log(blitz);
    crush = $("input[name='crush']:checked").val();
    console.log(crush);
    dimension = $("input[name='dimension']:checked").val();
    console.log(dimension);

    //Calculate score
    if (schmeckle === "0") {
    wrong++;
    }
    else if (schmeckle  === "1") {
    right++;
    }
   
    
   if (wubba === "0") {
    wrong++;
    }
    else if (wubba  === "1") {
    right++;
    }

   if (blitz === "0") {
    wrong++;
    }
    else if (blitz  === "1") {
    right++;
    }
   
   if (crush === "0") {
    wrong++;
    }
    else if (crush  === "1") {
    right++;
   }
    
   if (dimension === "0") {
    wrong++;
    }
    else if (dimension  === "1") {
    right++;
    }

    noanswer = 5 - right - wrong;

    alert("You got " + wrong + " wrong, " + right + " right, " + "and didn't answer " + noanswer);
    
  }
}

//Stop function that resets to 30 seconds
function stop() {
clearInterval(intervalId);
number = 30;
}

});