//Array for buttons & searches  
    // Pre-determined Supers
    var gifs = ["Batman", "The Green Lantern", "Super Man", "Super Woman"];

// This is the function that will go get the gifs
  function displayGif() {
    //It will get its search value from the data stored in data tags and add it to the query. API Key with object limits included.
    var gif = $(this).attr("data-super");
    var queryURL = "https://api.giphy.com/v1/gifs/search?q=" + gif + "&api_key=OhyKGDrCTct0EKGl1NmagjvwwelQR6WG&limit=10";
    
    // Creating an AJAX call for the specific gif button being clicked
    $.ajax({
      url: queryURL,
      method: "GET"
    })
    
    .then(function(response) {

    //Erase previous search
      $("#gif-section").empty();

    // Store object from the AJAX method and loop through each of the ten results
      var results = response.data;
      console.log(results);
      for (var i = 0; i < results.length; i++) {

    // Div to hold rating & gif
      var heroDiv = $("<div>");

      // Add rating and gif within a paragraph and image for each result and append
      var pRating = $("<p>").text("Rating: " + results[i].rating);
      var gifImage = $("<img>").attr({"src": results[i].images.fixed_height_still.url, "data-still": results[i].images.fixed_height_still.url, "data-animate": results[i].images.fixed_height.url, "data-state": "still", "Class": "gifclick"});
      console.log((gifImage).attr("data-still"));
      console.log((gifImage).attr("data-animate"));
      console.log((gifImage).attr("data-state"));
      console.log((gifImage).attr("Class"));
      heroDiv.append(gifImage);
      heroDiv.append(pRating);          
      $("#gif-section").prepend(heroDiv);
      }

        $(".gifclick").on("click", function() {
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
    }

// This function will loop through the array, create a button for each, and assign it a class, data tag, and text.
function renderButtons() {
    $("#gif-buttons").empty();
    for (var i = 0; i < gifs.length; i++) {
      var searchButton = $("<button>");
        searchButton.addClass("gif-btn");
        searchButton.attr("data-super", gifs[i]);
        searchButton.text(gifs[i]);
      $("#gif-buttons").append(searchButton);
    }
  }

  // Function for adding super powers by getting the value in the form and pushing it into the array
  $("#add-gif").on("click", function(event) {
    event.preventDefault();
    var gif = $("#gif-input").val().trim();
    gifs.push(gif);

    //Create buttons for the new powers
    renderButtons();
  });

  // Click event listener for all buttons with the class "gif-btn"
  $(document).on("click", ".gif-btn", displayGif);

  // Calling the renderButtons function to create the pre-determined super hero buttons
  renderButtons();