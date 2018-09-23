  $(document).ready(function() {
                
    //button array, it is interesting that the array displayed in the chrome inspector does not update the display with added buttons and when topics; is ran in the console it says undefined. learn why.
    var topics = [ "carlton", "dabbing", "die hard", "simpsons", "macarena", "austin powers", "snl", "ice bucket challenge", "bottle flip", "threes company", "benny hill", "mr robot"];
    



    var buttonMaker = function() {
      $("#buttons").empty();
          for (var i = 0; i < topics.length; i++) {
    
            
            var topicBtn = $("<button>");
    
           
            topicBtn.addClass("topic-button");
    
            
            topicBtn.attr("data-topic", topics[i]);
    
            
            topicBtn.text(topics[i]);
    
            
            $("#buttons").append(topicBtn);

            

    
          }
        };

        buttonMaker();

// Get the input field
var input = document.getElementById("addGIFInput");

// Execute a function when the user releases a key on the keyboard
input.addEventListener("keyup", function(event) {
  // Cancel the default action, if needed
  event.preventDefault();
  // Number 13 is the "Enter" key on the keyboard
  if (event.keyCode === 13) {
    // Trigger the button element with a click
    document.getElementById("addGIFButton").click();
  }
});




      $("#addGIFButton").on("click", function(event) {

        event.preventDefault();

        var addGIFButton = $("#addGIFInput").val().trim();

        topics.push(addGIFButton);

        buttonMaker(topics);
        
        //  THIS UNFORTUNATELY HAD TO BE CALLED BACK WITHIN THE ADDGIFBUTTON FUNCTION, THERE WAS NO OTHER WAY TO CONTINUE TO HAVE A LISTENER...
        //  ...FOR THE TOPIC BUTTON AFTER THE ADDGIFBUTTON WAS ALREADY LISTENED FOR AND PUSHED.  I WONDER IF THERE IS A WAY TO CALL OR SET UP A LISTENER AFTER A PRIOR EVENT...
        //  ...  I PROBABLY COULD HAVE PUT IN THE AJAX CALL INTO A FUNCTION SO THERE IS LESS CODE REPEATED, BUT THE BUTTON LISTNER HAS TO BE REPEATED.
        $(".topic-button").on("click", function(event) {

            event.preventDefault();
          
          //clear the background
          $("body").css({'background-image': 'url()'});
          $("#display").empty();
          
          var topic  = $(this).attr("data-topic");
    
          // Constructing the URL to search Giphy 
          var queryURL =  "https://api.giphy.com/v1/gifs/search?api_key=8Av2zQ9S2u9eDcxvPutqJmsopqTVVKGT&q=" + topic + "&limit=10"; 
          
          $.ajax({
            url: queryURL,
            method: "GET"
          })
            
            .then(function(response) {

              var results = response.data;
    
              for (var i = 0; i < results.length; i++) {
    
                  var gifDiv = $("<div>");
    
                  var rating = results[i].rating;
    
                  var p = $("<p>").text("Rating: " + rating);
                  
                  
    
                  var gifImage = $("<img>");
                   
                    // the excellent technique here is calling the API once and storing two URLS in the attribute!!!!
                    var gifImageStill= results[i].images.fixed_height_still.url;
                    var gifImageAnimate= results[i].images.fixed_height.url;
                  

                  gifImage.attr("src", gifImageStill);
                 
                gifImage.attr("data-still", gifImageStill);
                gifImage.attr("data-animate", gifImageAnimate);
                gifImage.attr("data-state", "still");
                gifImage.attr("class", "gif")
                
      

                //button method to make a download link but the a tag with the button attribute immediately below is much better
                  //var downloadBtn = document.createElement("button")
                  //var downloadBtn = $("<button>").text("Download")
                  //downloadBtn.addClass("btn downloadBtn");
                  //downloadBtn.attr("href", gifImageAnimate);
                  //downloadBtn.attr("download", "gif.gif");
                  //var downloadIcon = $("<i>");
                  //downloadIcon.addClass("fa fa-download");
                  //downloadBtn.append(downloadIcon).val("</i> Download</button>");




                              //this the bonus code to save A Gif, i disabled it because the download attribute is new in html5 and if it doesn't work and the gif is not downloaded 
                  //... it causes the animation gif to have a broken link because the browser looks for the downloaded gif in cache and it may not be there.
                //var a = $("<a>")
                //a.attr("href", gifImageAnimate);
                //a.attr("download",topic);
                //a.addClass("btn");
                //a.attr("role", "button");
               // a.attr("target", "_blank");
                //a.text("Download GIF");




                  gifDiv.append(gifImage);
                  //gifDiv.append(a);
                  gifDiv.append(p);
                  
    
                
                  



                  $("#display").prepend(gifDiv);
    
                
        
                
              }

              //$("#downloadBtn").on("click", function(){                  });
            
    
              $(".gif").on("click", function() {
                
                var state = $(this).attr("data-state");


                if (state === "still") {
                            //the source becomes the animate GIPHY API URL which is stored in the attribute and retrieved once with one .ajax call
                    $(this).attr("src", $(this).attr("data-animate"));
                  $(this).attr("data-state", "animate");
                } else {
                  $(this).attr("src", $(this).attr("data-still"));
                  $(this).attr("data-state", "still");
                }
              });
    
    
            });
    
    
    
    
            
        });
    
        
        
    });       //closeAddGIFButton


          /* plz disregard this I was practicing creating HTML with JQUERY
          $("#buttons").append("<p>");

          inputBox =  $("<input>").attr("type", "text");
          
          $("#buttons").append(inputBox);

           submitButton = $("<button>").attr({"type":"submit", "id": "addGIFButton"}).text("Add GIF");
          $("#buttons").append(submitButton);

            */

    
    

      $(".topic-button").on("click", function(event) {

        event.preventDefault();
      
      //clear the background
      $("body").css({'background-image': 'url()'});
      $("#display").empty();
      
      var topic  = $(this).attr("data-topic");

      
      
      var queryURL =  "https://api.giphy.com/v1/gifs/search?api_key=8Av2zQ9S2u9eDcxvPutqJmsopqTVVKGT&q=" + topic + "&limit=10"; 
      
      
      $.ajax({
        url: queryURL,
        method: "GET"
      })
        
        .then(function(response) {
          
          var results = response.data;

          
          for (var i = 0; i < results.length; i++) {

 
            // Creating a div for the gif
            var gifDiv = $("<div>");

            
            var rating = results[i].rating;

            
            var p = $("<p>").text("Rating: " + rating);

             
            var gifImage = $("<img>");
            var gifImageStill= results[i].images.fixed_height_still.url;
            var gifImageAnimate= results[i].images.fixed_height.url;
            
            
            gifImage.attr("src", gifImageStill);
             //the magic of storing a url for a later call inside an attribute tag so there is only 1 ajax call
            gifImage.attr("data-still", gifImageStill);
            gifImage.attr("data-animate", gifImageAnimate);
            gifImage.attr("data-state", "still");
            gifImage.attr("class", "gif")
            
            
              gifDiv.append(gifImage);
              gifDiv.append(p);

              
              $("#display").prepend(gifDiv);

            
    
            
          }

          $(".gif").on("click", function() {
            
            var state = $(this).attr("data-state");

            if (state === "still") {
              $(this).attr("src", $(this).attr("data-animate"));
              $(this).attr("data-state", "animate");
            } else {
              $(this).attr("src", $(this).attr("data-still"));
              $(this).attr("data-state", "still");
            }
          });


        });




        
    });




    

 




        // it is weird that the event listener still listens for clear, but it would not listen for a button push without the button being inside the addGIF function
          $("#clear").on("click", function() {
    
     
            $("#display").empty();
    
          });
    
        });
  