var config = {
    apiKey: "AIzaSyB1J4HU0IFXq9l7e2Uh_7AdTDPC6JWyUhg",
    authDomain: "learningfirebase-747c8.firebaseapp.com",
    databaseURL: "https://learningfirebase-747c8.firebaseio.com",
    projectId: "learningfirebase-747c8",
    storageBucket: "",
    messagingSenderId: "107744062066",
    appId: "1:107744062066:web:833861b03be990db"
};

firebase.initializeApp(config);

var database = firebase.database();

function currentTime() {
  var time = moment().format('HH:mm');
  $("#displayTime").html(time);
  setTimeout(currentTime, 15000);
};

$("#add-train-btn").on("click", function(event) {
  event.preventDefault();

  var trName = $("#train-name-input").val().trim();
  var trDest = $("#destination-input").val().trim();
  var trTime = $("#time-input").val().trim();
  var trFreq = $("#frequency-input").val().trim();

  var newTrain = {
    name: trName,
    destination: trDest,
    time: trTime,
    frequency: trFreq
  };

  database.ref().push(newTrain);

  $("#train-name-input").val("");
  $("#destination-input").val("");
  $("#time-input").val("");
  $("#frequency-input").val("");
});

database.ref().on("child_added", function(childSnapshot) {
  var trName = childSnapshot.val().name;
  var trDest = childSnapshot.val().destination;
  var trTime = childSnapshot.val().time;
  var trFreq = childSnapshot.val().frequency;

  console.log(trName);
  console.log(trDest);
  console.log(trTime);
  console.log(trFreq);


  var trTimeConverted = moment(trTime, "HH:mm").subtract(1, "years");
  var currentTime = moment();
  console.log(moment(currentTime).format("HH:mm"));
  var timeDifference = moment().diff(moment(trTimeConverted), "minutes");
  var remainderTime = timeDifference % trFreq;
  var minutesForTrain = trFreq - remainderTime;
  var nextArrival = moment().add(minutesForTrain, "minutes").format("HH:mm");
  

  var newRow = $("<tr>").append(
    $("<td>").text(trName),
    $("<td>").text(trDest),
    $("<td>").text(trFreq),
    $("<td>").text(nextArrival),
    $("<td>").text(minutesForTrain)
    );

  $("#train-table > tbody").append(newRow);

});

currentTime();