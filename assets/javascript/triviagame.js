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
  $("#schmeckle").css("display", "block");
  $("#jumbo1").css("display", "block");
  $("#start").css("display", "none");
}

//  Decrement function
function decrement() {

  //  Down tick one second
  number--;

  //  Show number in HTML
  $("#time-left").html("<p> Time Remaining: " + number + "</p>");


  //  What happens once it hits 0
  if (number === 0) {
    $("#schmeckle").css("display","none");
    $("#wubba").css("display", "none");
    $("#blitz").css("display", "none");
    $("#crush").css("display", "none");
    $("#dimension").css("display", "none");
    $("#timesup").css("display", "block");

    //  Run  stop function
    stop2();
  
  };
};

function stop2() {
  clearInterval(intervalId);
  number = 30;
};

//  Functions to pull up next question
$("#next1").on("click", next1);
function next1() {
  $("#schmeckle").css("display","none");
  $("#wubba").css("display", "block");
}

$("#next2").on("click", next2);
function next2() {
  $("#wubba").css("display", "none");
  $("#blitz").css("display", "block");
}

$("#next3").on("click", next3);
function next3() {
  $("#blitz").css("display", "none");
  $("#crush").css("display", "block");
}

$("#next4").on("click", next4);
function next4() {
  $("#crush").css("display", "none");
  $("#dimension").css("display", "block");
}

$("#next5").on("click", stop);

//Stop function that resets to 30 seconds
function stop() {
clearInterval(intervalId);
number = 30;

//  Alert the user that time is up and provide score

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

    if (right === 5){
      $("#judgement").html("<p> Great Job!</p>");
    }
    else {
      $("#judgement").html("<p> Get your shit together...</p>");
    }

    $("#dimension").css("display", "none");
    $("#results").css("display", "block");
    $("#totalright").html(right);
    $("#totalwrong").html(wrong);
    $("#totalun").html(noanswer);
    
  };

});