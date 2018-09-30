

var trainAudio =  new Audio ('assets/audio/choochoo.wav');
 


 // Initialize Firebase
 var config = {
  apiKey: "AIzaSyA2CjfsFsBFfoSHWVIdhhTNEB4antkInHU",
  authDomain: "choochoo-999bf.firebaseapp.com",
  databaseURL: "https://choochoo-999bf.firebaseio.com",
  projectId: "choochoo-999bf",
  storageBucket: "choochoo-999bf.appspot.com",
  messagingSenderId: "250556334666"
};
firebase.initializeApp(config);

var database = firebase.database();




// Button for adding Trains
$("#add-train-btn").on("click", function(event) {
  event.preventDefault();
  trainAudio.play();

  // Grabs user input
  var trainName = $("#train-name-input").val().trim();
  var trainDestination = $("#destination-input").val().trim();
  var trainStartTime = parseInt(moment($("#train-start-time-input").val().trim(), "HH:mm").format("X"));
  var trainFrequency = $("#frequency-input").val().trim();
   
  
  // Creates local "temporary" object
  var newTrain = {
    name: trainName,
    destination: trainDestination,
    startTime: trainStartTime,
    frequency: trainFrequency
  };

  // Uploads train data to the database
  database.ref().push(newTrain);

  // Logs everything to console
  console.log(newTrain.name);
  console.log(newTrain.destination);
  console.log(newTrain.startTime);
  console.log(newTrain.frequency);

  alert("Train successfully added");

  // Clears all of the text-boxes
  $("#train-name-input").val("");
  $("#destination-input").val("");
  $("#train-start-time-input").val("");
  $("#frequency-input").val("");
});

// Create Firebase event for getting data and adding a row in the html when a user adds an entry
database.ref().on("child_added", function(childSnapshot) {
  console.log(childSnapshot.val());

  // Store everything into a variable.
  var trainName = childSnapshot.val().name;
  var trainDestination = childSnapshot.val().destination;
  var trainStartTime = childSnapshot.val().startTime;
  var trainFrequency = childSnapshot.val().frequency;

  // Train Info
  console.log(trainName);
  console.log(trainDestination);
  console.log(trainStartTime);
  console.log(trainFrequency);


var now = parseInt(moment().format("X"));
var minutesAwayUnix = 0; 
var nextArrivalUnix = 0;
var trainFrequencySeconds = 0;

trainFrequencySeconds = trainFrequency * 60;


if (trainStartTime > now) {
  minutesAwayUnix = trainStartTime - now; 
  nextArrivalUnix = now + minutesAwayUnix;

  //solution for formatting over 59 minutes
  //var minutesAwayFormattedX = moment.duration(minutesAwayUnix).asMinutes();
  //var minutesAwayFormatted = Math.round(minutesAwayFormattedX);
  console.log("M" + minutesAwayFormattedX);
  }
 else if (trainStartTime < now) {
  minutesAwayUnix = trainFrequencySeconds - ((now - trainStartTime) % trainFrequencySeconds);      
  
  nextArrivalUnix = trainStartTime + ((Math.trunc((now - trainStartTime) / trainFrequencySeconds)) + 1) * trainFrequencySeconds;     
  
  //solution for formatting over 59 minutes
  //minutesAwayFormatted = moment(minutesAwayUnix, "X").format("mm");
}
  else {
    minutesAwayUnix = 0; 
    nextArrivalUnix = now;
  }


  nextArrivalFormatted = moment(nextArrivalUnix, "X").format("HH:mm");
  //formats to 59 minutes
  minutesAwayFormatted = moment(minutesAwayUnix, "X").format("mm");
  
  

console.log(trainFrequencySeconds); 





  // Create the new row
  var newRow = $("<tr>").append(
    $("<td>").text(trainName),
    $("<td>").text(trainDestination),
    $("<td>").text(trainFrequency),
    $("<td>").text(nextArrivalFormatted),
    $("<td>").text(minutesAwayFormatted)
    
  );

  // Append the new row to the table
  $("#train-table > tbody").append(newRow);
});

