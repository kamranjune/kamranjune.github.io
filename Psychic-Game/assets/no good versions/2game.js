

var psychic = {
    
"wins" : 0,
"losses" : 0,

"guessesLeft" : 9,
"userGuessArray" : [],

"winsText" : document.getElementById("wins-text"),
"lossesText" : document.getElementById("losses-text"),
"guessesLeftText" : document.getElementById("guessesleft-text"),
"userChoiceText" : document.getElementById("userchoice-text"),

}
    psychic.winsText.textContent = "Wins: " + psychic.wins;
    psychic.lossesText.textContent = "Losses: " + psychic.losses;
    psychic.guessesLeftText.textContent = "Guesses Left: " + psychic.guessesLeft;
    psychic.userChoiceText.textContent = "Your Guesses So Far: " + psychich.userGuessArray;




    document.onkeyup = function(event) {

        
       
        var computerChoiceAscii = Math.floor(Math.random() * 26) + 97;
        var computerChoice = String.fromCharCode(computerChoiceAscii);
        console.log("letter: "+ String.fromCharCode(computerChoiceAscii));
    
        
        var userGuess = event.key.toLowerCase();
        userGuessArray.push(userGuess);
    



    

    if (computerChoice === userGuess) {

        wins++; 
        docment.r
    return; }
        
        else if (computerChoice !== userGuess) {

            lossescounter++;
            guessesLeft--;    
        }

    if (wins=1 || lossescounter = 9) {window.}        
       

    // Display the user guesses, guessesleft, and wins/losses.
    
    

  winsText.textContent = "Wins: " + wins;
    lossesText.textContent = "Losses: " + losses;
    guessesLeftText.textContent = "Guesses Left: " + guessesLeft;
    userChoiceText.textContent = "Your Guesses So Far: " + userGuessArray;
    }
