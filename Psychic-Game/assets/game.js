
// declaring psychic object
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
   
// writing out initial values of wins, Losses, Guesses Left, and Guesses
psychic.winsText.textContent = "Wins: " + psychic.wins;
psychic.lossesText.textContent = "Losses: " + psychic.losses;
psychic.guessesLeftText.textContent = "Guesses Left: " + psychic.guessesLeft;
psychic.userChoiceText.textContent = "Your Guesses So Far: " + psychic.userGuessArray;


//pressing a key and releasing it calls the function

    document.onkeyup = function(event) {

        
       //computer generated letter useing Math.random converted to ASCII code
        var computerChoiceAscii = Math.floor(Math.random() * 26) + 97;
        var computerChoice = String.fromCharCode(computerChoiceAscii);
        console.log("letter: "+ String.fromCharCode(computerChoiceAscii));
    
        
        var userGuess = event.key.toLowerCase();
        

        //checking to see if a non letter was pressed, if not there is an alert
        //the letter is converted to ASCII which is the inverse of the method used above
        //control and shift keys don't seem to have ascii codes unfortunately.
        var stringCheckTO = userGuess.charCodeAt(0);
        

        if (stringCheckTO < 97 || stringCheckTO > 122) {
            
            psychic.guessesLeft = 9;

            psychic.userGuessArray = [];
            alert("You must enter a letter!");
            return;
        //what would happen without this return?
        }
            
        // pushing the guesses back to the array
        psychic.userGuessArray.push(userGuess);
    



    //if win

    if (computerChoice === userGuess) {

        psychic.wins++; 

        psychic.guessesLeft= 9;

        psychic.userGuessArray = [];

        $(document).ready(function(){
        $('#akinator').attr("src","assets/images/akinatorwin.png");
        });
        
}
        // if more gueyyyysses left
        else if (computerChoice !== userGuess) {

            //change  x += 1    x = x + 1   =+
            psychic.guessesLeft--;    
        }

 
        // if lose
        if (psychic.guessesLeft === 0) {
            
            
            psychic.losses++;
            
            psychic.guessesLeft= 9;

            psychic.userGuessArray = [];

            $(document).ready(function(){
                $('#akinator').attr("src","assets/images/akinatorloss.jpg");
                });
        }

        //Results are updated within the function, it does not work if these are outside of the function.
        psychic.winsText.textContent = "Wins: " + psychic.wins;
        psychic.lossesText.textContent = "Losses: " + psychic.losses;
        psychic.guessesLeftText.textContent = "Guesses Left: " + psychic.guessesLeft;
        psychic.userChoiceText.textContent = "Your Guesses So Far: " + psychic.userGuessArray;
    }

