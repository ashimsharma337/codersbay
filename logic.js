// Initialize Firebase
var firebaseConfig = {
    apiKey: "AIzaSyA8w-JvtJzeGllsdiy4pzd_i1IfQfhBhmA",
    authDomain: "coders-bay-e356e.firebaseapp.com",
    projectId: "coders-bay-e356e",
    storageBucket: "coders-bay-e356e.appspot.com",
    messagingSenderId: "593977434772",
    appId: "1:593977434772:web:118e9343788d2b3b9c4a81"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);

// Create a variable to reference the database
var database = firebase.database();


// Initial Values
var initialBid = 0;
var intialBidder = "No one :-(";

var highPrice = initialBid;
var highBidder = intialBidder;

//=======================================================

//
// At the initial load, get a snapshot of the current data.
// At the initial load and subsequent value changes, get a snapshot of the stored data.
// This function allows you to update your page in real-time when the firebase database changes.
database.ref().on("value", function(snapshot) {

    // If Firebase has a highPrice and highBidder stored, update our client-side variables
    if (snapshot.child("highBidder").exists() && snapshot.child("highPrice").exists()) {
      // Set the variables for highBidder/highPrice equal to the stored values.
      highBidder = snapshot.val().highBidder;
      highPrice = parseInt(snapshot.val().highPrice);
    }
  
    // If Firebase does not have highPrice and highBidder values stored, they remain the same as the
    // values we set when we initialized the variables.
    // In either case, we want to log the values to console and display them on the page.
    console.log(highBidder);
    console.log(highPrice);
    $("#highestBidder").text(highBidder);
    $("#highestPrice").text("$"+highPrice);
  
    // If any errors are experienced, log them to console.
  }, function(errorObject) {
    console.log("The read failed: " + errorObject.code);
  });

  // If Firebase has a highPrice and highBidder stored(first case)


   // Set the initial variales for highBidder equal to the stored values.



   // Change the HTML to reflect the initial value


     // Print the initial data to the console.


  // Else Keep the initial variables for highBidder equal to the initial values



// If any errors are experienced, Log them to console.


//============================================================================


// Whenever a user clicks the submit button
$("#submitBid").on("click",function(event){
    event.preventDefault();

    //Get the input values
    var bidderName = $("#bidderName").val().trim();
    var bidderPrice = parseInt($("#bidderPrice").val().trim());

    console.log(bidderName);
    console.log(bidderPrice);
    
    if (bidderPrice > highPrice) {
        alert("You are the highest bidder!");

        // Save the new price in Firebase. This will cause our "value" callback above to fire and update
        // the UI.
        database.ref().set({
            highBidder:bidderName,
            highPrice:bidderPrice
        });

    // Log the new High Price
    console.log("New High Price");
    console.log(bidderName);
    console.log(bidderPrice);
    }
 else{
        // Alert
        alert("You have to bid higher!");
    }
    return false;

});


    //Get the input values


    //Log the Bidder and Price (Even if not the highest)


    //If Then statements to compare against previous high bidder

      
       // Alert that they are High Bidder