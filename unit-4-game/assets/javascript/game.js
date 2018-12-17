var crystal = {
    //As the girl said in Gone with the Wind, "I declare!":
    "audioLuthor" : new Audio ('assets/audio/evillaugh.wav'),
    "visualSetInterval" : setInterval(function(){ $(".container").css({"background-image": "url('./assets/images/supermanluthorbackground.jpg'"});}, 1000),
    "audioSuperman":  new Audio ('assets/audio/win.ogg'),
    "wins" : 0,
    "losses" : 0,

    "winsText" : document.getElementById("wins-text"),
    "lossesText":  document.getElementById("losses-text"),
    "computerChoiceText": document.getElementById("computer-choice-box"),
    "totalScoreText": document.getElementById("total-score-box"),


    "computerRandomizer" : function () {return Math.floor(Math.random() * 101) + 19;},
    
    "crystalRandomizer" : function () {return Math.floor(Math.random() * 12) + 1;},
   
        //notes for Kamran to remind him of his learning here:
        //"randomCrystalChoice" : function crystalRandomizer () { Math.floor(Math.random() * 12) + 1
                    //no should not have two names, this is the way to name and call a function:
        // var x = function  ()
         //x(); 

        //text += tobeconcatenatedstring
        //text = text + tobeconcatenatedstring

    
    
    "randomComputerChoice" : 0,
    
    "crystalOne" : 0,
    "crystalTwo" : 0,
    "crystalThree" : 0,
    "crystalFour" : 0,

    
    "crystalGameTally" : 0,


    //startNewGame function
    "startNewGame" : function() {
        
        
        this.randomComputerChoice = this.computerRandomizer();

        this.crystalOne = this.crystalRandomizer();
        this.crystalTwo = this.crystalRandomizer();
        this.crystalThree = this.crystalRandomizer();
        this.crystalFour = this.crystalRandomizer(); 
       
        this.crystalGameTally = 0;

        crystal.computerChoiceText.textContent = "Computer Choice Dosage " + crystal.randomComputerChoice;
        crystal.totalScoreText.textContent = "Superman's Choice Dosage " + crystal.crystalGameTally;

    },


    //the main enchilada and also the big enchilada
    "crystalAdder" : function(crystalTallyIn) {
        this.crystalGameTally += crystalTallyIn;
        this.totalScoreText.textContent = "Superman's Choice Dosage " + this.crystalGameTally;

           if (this.randomComputerChoice == this.crystalGameTally) {

            this.wins++;
            this.winsText.textContent = "Superman " + this.wins;
            this.audioSuperman.play();
            this.startNewGame();
            $(".container").css({"background-image": "url('https://static.tvtropes.org/pmwiki/pub/images/breakingthebonds_4686.jpg'"});
            this.visualSetInterval();
            
           
        
             }

        else if (this.crystalGameTally > this.randomComputerChoice) {

            this.losses++;
            this.lossesText.textContent = "Luthor " + this.losses;
            this.audioLuthor.play();
            this.startNewGame();


        };

    },
                    //more Kamran thoughts:
                    //would a function within a function pass in the parent function parameter some or all, based on order and number copied?
                    //can you put if for etc inside object in function?  yes of course.

};


//As Police Dispatchers say: "CALLING all Cars...(be on the lookout for crystal.   functions) and initial text default div textContent propogation.
crystal.startNewGame();

crystal.winsText.textContent = "Superman " + crystal.wins;
crystal.lossesText.textContent = "Luthor " + crystal.losses;
crystal.computerChoiceText.textContent = "Computer Choice Dosage " + crystal.randomComputerChoice;
crystal.totalScoreText.textContent = "Superman's Choice Dosage " + crystal.crystalGameTally;




//don't forget document.ready, it took me at least an hour to realize that word function() is mandatory in the jquery selector, it is not a placeholder for calling a method.
$(document).ready (function(){

    $('button[name="crystal-one"]').on("click", function() {crystal.crystalAdder(crystal.crystalOne)});
    
    $('button[name="crystal-two"]').on("click", function () {crystal.crystalAdder(crystal.crystalTwo)});
    
    $('button[name="crystal-three"]').on("click", function() {crystal.crystalAdder(crystal.crystalThree)});
    
    $('button[name="crystal-four"]').on("click", function () {crystal.crystalAdder(crystal.crystalFour)});
    });
    
    //the end