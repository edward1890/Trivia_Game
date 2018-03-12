$(document).ready ( function(){
      console.log("running");




// TIMER FUNCTION BELOW
var count=300;

var counter=setInterval(timer, 1000); //1000 will  run it every 1 second

function timer()
{
  count=count-1;
  if (count <= 0)
  {
     clearInterval(counter);
     console.log("time is up");
     window.location.href = 'done.html';
     return;
  }

  document.getElementById("timer").innerHTML=count + " Seconds";
}
// CLICKING FUNCTION BELOW
var config = {
    apiKey: "AIzaSyB1jMhLtQboUWQg2CdWtEER0kRukW_U7Ss",
    authDomain: "trivia-game-ae518.firebaseapp.com",
    databaseURL: "https://trivia-game-ae518.firebaseio.com",
    projectId: "trivia-game-ae518",
    storageBucket: "trivia-game-ae518.appspot.com",
    messagingSenderId: "764183551354"
  };
  firebase.initializeApp(config);

  var database = firebase.database();

  var lossCounter = 0;
  var winCounter = 0;
  var unCounter = 5;

    
$("#win").on("click", function() {
        winCounter++;
        unCounter--;
        console.log("win");
    
  
        //  Store Click Data to Firebase in a JSON property called clickCount
        // Note how we are using the Firebase .set() method
        database.ref().set({
          winCount: winCounter
        });
      });
$("#loss").on("click", function() {
        lossCounter++;
        unCounter--;
        console.log("loss");
       
  
        //  Store Click Data to Firebase in a JSON property called clickCount
        // Note how we are using the Firebase .set() method
        database.ref().set({
          lossCount: lossCounter
        });
    
});

      database.ref().on("value", function(snapshot) {

        
        console.log(snapshot.val());
  
        // Then we change the html associated with the number.
        //$("#click-value").text(snapshot.val().clickCount);
  
        // Then update the clickCounter variable with data from the database.
        //winCounter = snapshot.val().winCount;
  
        // If there is an error that Firebase runs into -- it will be stored in the "errorObject"
        // Again we could have named errorObject anything we wanted.
      }, function(errorObject) {
  
        // In case of error this will print the error
        console.log("The read failed: " + errorObject.code);
      });



});









