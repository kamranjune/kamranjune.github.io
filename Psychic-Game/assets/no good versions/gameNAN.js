

var psychic = {
    
"wins" : 0,
"losses" : 0,

"guessesLeft" : 9,
"userGuessArray" : [],

"winsText" : document.getElementById("wins-text"),
"lossesText" : document.getElementById("losses-text"),
"guessesLeftText" : document.getElementById("guessesleft-text"),
"userChoiceText" : document.getElementById("userchoice-text"),

};
   
psychic.winsText.textContent = "Wins: " + psychic.wins;
psychic.lossesText.textContent = "Losses: " + psychic.losses;
psychic.guessesLeftText.textContent = "Guesses Left: " + psychic.guessesLeft;
psychic.userChoiceText.textContent = "Your Guesses So Far: " + psychic.userGuessArray;


var stringCheck = 4;
   
    document.onkeyup = function(event) {

        
       
        var computerChoiceAscii = Math.floor(Math.random() * 26) + 97;
        var computerChoice = String.fromCharCode(computerChoiceAscii);
        console.log("letter: "+ String.fromCharCode(computerChoiceAscii));
    
        
        var userGuess = event.key.toLowerCase();
        var stringCheck = event.key;

        var stringCheckPI = parseInt (stringCheck);
        var stringCheckTO = typeof stringCheckPI;

        if (stringCheckTO !== "string") {
            
            psychic.guessesLeft = 9;

            psychic.userGuessArray = [];
            alert("You must enter a letter!");
            return;
        }
            
        psychic.userGuessArray.push(userGuess);
    



    

    if (computerChoice === userGuess) {

        psychic.wins++; 

        psychic.guessesLeft= 9;

        psychic.userGuessArray = [];
        
//    return; 
}
        
        else if (computerChoice !== userGuess) {

            
            psychic.guessesLeft--;    
        }

 
    
        if (psychic.guessesLeft === 0) {
            
            
            psychic.losses++;
            
            psychic.guessesLeft= 9;

            psychic.userGuessArray = [];
        }

        
        psychic.winsText.textContent = "Wins: " + psychic.wins;
        psychic.lossesText.textContent = "Losses: " + psychic.losses;
        psychic.guessesLeftText.textContent = "Guesses Left: " + psychic.guessesLeft;
        psychic.userChoiceText.textContent = "Your Guesses So Far: " + psychic.userGuessArray;
    }

