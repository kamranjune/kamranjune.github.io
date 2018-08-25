

var wins = 0;
var losses = 0;
var guessesLeft = 9;


var winsText = document.getElementById("wins-text");
var lossesText = document.getElementById("losses-text");
var guessesLeftText = document.getElementById("guessesleft-text");
var userChoiceText = document.getElementById("userchoice-text");


    winsText.textContent = "Wins: " + wins;
    lossesText.textContent = "Losses: " + losses;
    guessesLeftText.textContent = "Guesses Left: " + guessesLeft;
    userChoiceText.textContent = "Your Guesses So Far: " + userGuessLower;




    document.onkeyup = function(event) {

        
        var userGuess = event.key;
        var userGuessLower = userGuess.toLowerCase();
        var userGuessLowerParse = parseInt(userGuessLower);
  








for (var i = 0; i < 9; i++) {

        var computerChoiceAscii = Math.floor(Math.random() * 26) + 97;
        var computerChoice = String.fromCharCode(computerChoiceAscii);
        console.log("letter: "+ String.fromCharCode(computerChoiceAscii));
    
   
    
        if (typeof userGuessLowerParse === "number") {
            alert("You must enter a lowercase letter!");
        }
            else if (userGuessLower.charAt.length > 0){
            alert ("Enter 1 letter only!");
        }

    if (computerChoice === userGuessLower) {

        wins=wins++; }
        
        else if (computerChoice !== userGuessLower) {

            losses=losses++;
           
        }

        
guessesLeft = guessesLeft - 1;

    // Display the user guesses, guessesleft, and wins/losses.
    
    winsText.textContent = "Wins: " + wins;
    lossesText.textContent = "Losses: " + losses;
    guessesLeftText.textContent = "Guesses Left: " + guessesLeft;
    userChoiceText.textContent = "Your Guesses So Far: " + userGuessLower;
  }
  
    }
