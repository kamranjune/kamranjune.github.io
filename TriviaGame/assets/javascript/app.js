

                


  var timeLeft = 60;
            
  var countdownTimer = setInterval(function(){
  timeLeft--;
  document.getElementById("countdown-timer").textContent = timeLeft;
  if(timeLeft <= 0) {
      clearInterval(countdownTimer);
      var correct = 0;
      var incorrect = 0;
      var unanswered = 4;
      if ($('input[name=question-one-answer]:checked').val() === "appendChild") {
              $("#question-one-div").text("Question 1:  CORRECT!  appendChild is used to attach a new div to a page.")
                  correct++;
                  unanswered--;
      } else if ($('input[name=question-one-answer]:checked').val() === "setElement") {
              $("#question-one-div").text("Question 1: Don't worry, Kamran initially picked setElement rather than appendChild too.  At least you both learned!")
                  incorrect++;
                  unanswered--;
          } else {$("#question-one-div").text("Question 1: Unanswered")
          }
  
      if ($('input[name=question-two-answer]:checked').val() === "attr") {
              $("#question-two-div").text("Question 2:  CORRECT!  The attr JQUERY method can be used to place attributes on HTML elements.")
                  correct++;
                  unanswered--;
      } else if ($('input[name=question-two-answer]:checked').val() === "append") {
              $("#question-two-div").text("Question 2:  Don't worry, Kamran initially picked append rather than the attr jQuery method too.  At least you both learned!")
                  incorrect ++;
                  unanswered--;
          } else {$("#question-two-div").text("Question 2: Unanswered")
          }
  
      if ($('input[name=question-three-answer]:checked').val() === "addClass") {
              $("#question-three-div").text("Question 3:  CORRECT!  addClass JQUERY method is used to add classes to elements.")
                  correct++;
                  unanswered--;
      } else if ($('input[name=question-three-answer]:checked').val() === "setClass") { 
          $("#question-three-div").text("Question 3:  Don't worry, Kamran initially picked setClass rather than addClass too.  At least you both learned!")
                  incorrect ++;
                  unanswered--;
          } else {$("#question-three-div").text("Question 3: Unanswered")
          }
  
      if ($('input[name=question-four-answer]:checked').val() === "text") {
              $("#question-four-div").text('Question 4:  CORRECT!  $("#myButton").text("SuperButton") is used to show "SuperButton" using JQuery.')
                  correct++;
                  unanswered--;
      } else if ($('input[name=question-four-answer]:checked').val() === "name") {
              $("#question-four-div").text("Question 4: Don't worry, Kamran initially picked .name rather than .text too.  At least you both learned!")
                  incorrect ++;
                  unanswered--;
          } else {$("#question-four-div").text("Question 4: Unanswered")
          }
  
      $('button[name="done-button"]').css({'display': "none"});
          $("#countdown-timer-div").css({'display': "none"});
     
  
  
  
      var results = $('#results-div');

      results.append("Now time for some real fun, play the Chrome Dinosaur Game: <a href='http://www.trex-game.skipser.com/'>http://www.trex-game.skipser.com/</a>");
      results.prepend("<p>All Done! <p> Correct Answers: " + correct +"<p>"+ "Incorrect Answers: " + incorrect + "<p>" + "Unanswered: " + unanswered);
      }
  },1000);


    $('button[name="start-button"]').on("click", function() {

        $("#questions-div").css({'display': "block"});
        $("#countdown-timer-div").css({'display': "block"});
        $('button[name="start-button"]').css({'display': "none"});

        countdownTimer();      
        
        
    });



    $('button[name="done-button"]').on("click", function() {

        timeLeft = 0;


    });









