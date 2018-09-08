var crystal = {

    "wins" : 0,
    "losses" : 0,

    "winsText" : document.getElementById("wins-text"),
    "lossesText":  document.getElementById("losses-text"),

    "computerRandomizer" : function () {Math.floor(Math.random() * 101) + 19
    
        },
    "crystalRandomizer" : function () { Math.floor(Math.random() * 12) + 1
    
        //"randomCrystalChoice" : function crystalRandomizer () { Math.floor(Math.random() * 12) + 1
    
        }, 
    
    "randomComputerChoice" : 0,
    
    "crystal1" : 0,
    "crystal2" : 0,
    "crystal3" : 0,
    "crystal4" : 0,

    
    "crystalGameTally" : 0,

    "startNewGame" : function() {
        
        
        this.randomComputerChoice = this.computerRandomizer();

        this.crystal1 = this.crystalRandomizer();
        this.crystal2 = this.crystalRandomizer();
        this.crystal3 = this.crystalRandomizer();
        this.crystal4 = this.crystalRandomizer(); 
       
        this.crystalGameTally = 0;


    },

    "crystalAdder" : function(crystalTallyIn) {
        this.crystalGameTally += this.crystalTallyIn 
    },

    //would a function within a function pass in the parent function parameter some or all, based on order and number copied?
    "crystalGame" : function () {


        while (this.randomComputerChoice < this.crystalGameTally) {


 //not sure about click calling the general crystalGame function and then another click here for or is the click value passed in a paramter of crystalGame two onclicks won't work
            this.crystalGameTally = $("#crystal1").on("click", this.crystalAdder(this.crystal1)) + 
            $("#crystal2").on("click", this.crystalAdder(this.crystal2)) +
            $("#crystal3").on("click", this.crystalAdder(this.crystal3)) +
            $("#crystal4").on("click", this.crystalAdder(this.crystal4)) 

        }; 

        if (this.randomComputerChoice == this.crystalGameTally) {

            this.wins++;
            this.startNewGame()
        };

        if (this.randomComputerChoice > this.crystalGameTally) {

            this.losses++;
            this.startNewGame();


        };
    },
    //can you put if for etc inside object in function?

};

crystal.winsText.textContent = "Wins: " + crystal.wins;
crystal.lossesText.textContent = "Losses " + psychic.losses;



crystal.startNewGame();


$("#crystal1").on("click", crystal.crystalGame(crystal1));

$("#crystal2").on("click", crystal.crystalGame());

$("#crystal3").on("click", crystal.crystalGame());

$("#crystal4").on("click", crystal.crystalGame());
