$(document).ready(function(){

//Set variables for Wins, Losses, and Counter
var wins = 0;
var losses = 0;
var counter = 0;

$(".score").text(counter);
$("#wins").text(" " + wins);
$("#losses").text(" " + losses);

//Set variable for the target by using a randomizer(adding console for troubleshooting)
var targetNumber = Math.floor(Math.random() * (120 - 19 + 1) ) + 19;
console.log(targetNumber);
$(".target").text(targetNumber);


 //Set images' value attribute by using a randomizer and add by appending. (Will set 4 separate. This leads to issues overlapping. Could create a for loop)
 var crystal1 = Math.floor(Math.random() * (12 - 1 + 1) ) + 1;
 console.log(crystal1);
 $("#imgCrystal1").attr("value", crystal1);

 var crystal2 = Math.floor(Math.random() * (12 - 1 + 1) ) + 1;
 console.log(crystal2);
 $("#imgCrystal2").attr("value", crystal2);

 var crystal3 = Math.floor(Math.random() * (12 - 1 + 1) ) + 1;
 console.log(crystal3);
 $("#imgCrystal3").attr("value", crystal3);

 var crystal4 = Math.floor(Math.random() * (12 - 1 + 1) ) + 1;
 console.log(crystal4);
 $("#imgCrystal4").attr("value", crystal4);

//Create on click function that retrieves the "Value=" of each crystal, converts it into an integer, and adds it to the counter
$(".crystal-images").on("click", function() {
    var value= ($(this).attr("value"));
    value = parseInt(value);
    counter += value;
    //display the counter
    $(".score").text(counter);

    //Win logic
    if (counter === targetNumber) {
    alert("You Win!");
    wins++;
    //add win variable
    $("#wins").text(" " + wins);
    //reset counter
    counter=0;
    $(".score").text(counter);
    //target reset
    targetNumber = Math.floor(Math.random() * (120 - 19 + 1) ) + 19;
    console.log(targetNumber);
    $(".target").text(targetNumber);
    //crystal reset
    crystal1 = Math.floor(Math.random() * (12 - 1 + 1) ) + 1;
    console.log(crystal1);
    $("#imgCrystal1").attr("value", crystal1);
    crystal2 = Math.floor(Math.random() * (12 - 1 + 1) ) + 1;
    console.log(crystal2);
    $("#imgCrystal2").attr("value", crystal2);
    crystal3 = Math.floor(Math.random() * (12 - 1 + 1) ) + 1;
    console.log(crystal3);
    $("#imgCrystal3").attr("value", crystal3);
    crystal4 = Math.floor(Math.random() * (12 - 1 + 1) ) + 1;
    console.log(crystal4);
    $("#imgCrystal4").attr("value", crystal4);
    }

    //Lose logic
    else if (counter >= targetNumber) {
    alert("You lose!");
    losses++;
    $("#losses").text(" " + losses);
    counter=0;
    $(".score").text(counter);
    targetNumber = Math.floor(Math.random() * (120 - 19 + 1) ) + 19;
    console.log(targetNumber);
    $(".target").text(targetNumber);
    crystal1 = Math.floor(Math.random() * (12 - 1 + 1) ) + 1;
    console.log(crystal1);
    $("#imgCrystal1").attr("value", crystal1);
    crystal2 = Math.floor(Math.random() * (12 - 1 + 1) ) + 1;
    console.log(crystal2);
    $("#imgCrystal2").attr("value", crystal2);
    crystal3 = Math.floor(Math.random() * (12 - 1 + 1) ) + 1;
    console.log(crystal3);
    $("#imgCrystal3").attr("value", crystal3);
    crystal4 = Math.floor(Math.random() * (12 - 1 + 1) ) + 1;
    console.log(crystal4);
    $("#imgCrystal4").attr("value", crystal4);
    }
    
});
});