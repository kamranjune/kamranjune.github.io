

var wins = 0;
var losses = 0;
var guessesLeft = 9;
var userGuessArray = [];

var winsText = document.getElementById("wins-text");
var lossesText = document.getElementById("losses-text");
var guessesLeftText = document.getElementById("guessesleft-text");
var userChoiceText = document.getElementById("userchoice-text");


    winsText.textContent = "Wins: " + wins;
    lossesText.textContent = "Losses: " + losses;
    guessesLeftText.textContent = "Guesses Left: " + guessesLeft;
    userChoiceText.textContent = "Your Guesses So Far: " + userGuessArray;




    document.onkeyup = function(event) {

        
       
        var computerChoiceAscii = Math.floor(Math.random() * 26) + 97;
        var computerChoice = String.fromCharCode(computerChoiceAscii);
        console.log("letter: "+ String.fromCharCode(computerChoiceAscii));
    
        
        var userGuess = event.key.toLowerCase();
        userGuessArray.push(userGuess);
    



for (var i = 0; i < 9; i++) {

    

    if (computerChoice === userGuess) {

        wins++; 
    return; }
        
        else if (computerChoice !== userGuess) {

            losses++;
            guessesLeft--;    
        }

        
       

    // Display the user guesses, guessesleft, and wins/losses.
    
    
  }
  winsText.textContent = "Wins: " + wins;
    lossesText.textContent = "Losses: " + losses;
    guessesLeftText.textContent = "Guesses Left: " + guessesLeft;
    userChoiceText.textContent = "Your Guesses So Far: " + userGuessArray;
    }
