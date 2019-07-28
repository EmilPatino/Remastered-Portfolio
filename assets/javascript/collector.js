$("#search-btn").on("click", function (event) {
    event.preventDefault();

    $("#fair-price-result").text("Not Available");
    $("#good-price-result").text("Not Available");
    $("#mint-price-result").text("Not Available");
    $("#hidden").css("display", "block");
    $('body,html').css("height", "auto");

    var sTitle = $("#title-input").val().trim();
    var sArtist = $("#artist-input").val().trim();

    var queryURL = "https://api.discogs.com/database/search?release_title=" + sTitle + "&artist=" + sArtist +  "&format=vinyl&per_page=1&page=1&key=CQwYyYowOAghyybYpMYL&secret=hlsXvJXvbpgfeoNJJHhOjEmSWzBgKvnY";

    $.ajax({
      url: queryURL,
      method: "GET"
    }).then(function (response) {
      var imageResult = $("#image-result").attr("src", response.results[0].cover_image).addClass("limitPics");
      var titleResult = $("#title-result").text(response.results[0].title);
      var yearResult = $("#year-result").text(response.results[0].year);
      var genreResult = $("#genre-result").text(response.results[0].genre);
      var releaseID = response.results[0].id;
      
      var queryURL = "https://api.discogs.com/marketplace/price_suggestions/" + releaseID + "?token=IxYjEFQzSJoGKBwroxGLmyBkwplVfHZgZkrcdxeg";
      $.ajax({
        url: queryURL,
        method: "GET"
      }).then(function (response) {
        var fairPriceResults = response['Fair (F)'].value;
        var fixedFairPrice = fairPriceResults.toFixed(2);
        $("#fair-price-result").text("$" + fixedFairPrice);

        var goodPriceResults = response['Good (G)'].value;
        var fixedGoodPrice = goodPriceResults.toFixed(2);
        $("#good-price-result").text("$" + fixedGoodPrice);

        var mintPriceResults = response['Mint (M)'].value;
        var fixedMintPrice = mintPriceResults.toFixed(2);
        $("#mint-price-result").text("$" + fixedMintPrice);
      });
    });
  });

  var config = {
    apiKey: "AIzaSyAo8ncgpdQXqUZvAXz8mAt11aoDf4-nZI0",
    authDomain: "recordcollector-176f2.firebaseapp.com",
    databaseURL: "https://recordcollector-176f2.firebaseio.com",
    storageBucket: "recordcollector-176f2.appspot.com",
    messagingSenderId: "956026125184",
};

firebase.initializeApp(config);

var database = firebase.database();

var aTitle = $("#title-input").val();
var aArtist = $("#artist-input").val();

var queryURL = "https://api.discogs.com/database/search?release_title=" + aTitle + "&artist=" + aArtist + "&format=vinyl&per_page=1&page=1&key=CQwYyYowOAghyybYpMYL&secret=hlsXvJXvbpgfeoNJJHhOjEmSWzBgKvnY";

$.ajax({
    url: queryURL,
    method: "GET"
}).then(function (response) {
  $("#collection-btn").on("click", function (event) {
        event.preventDefault();

        var titleList = $("#title-input").val();
        var artistList = $("#artist-input").val();
        
        var newListing = {
            title: titleList,
            artist: artistList,
        };

        database.ref().push(newListing);

        $("#title-input").val("");
        $("#artist-input").val("");

    });

    database.ref().on("child_added", function (childSnapshot) {
        var titleList = childSnapshot.val().title;
        var artistList = childSnapshot.val().artist;
        

        var newRow = $("<tr>").append(
            $("<td>").text(titleList),
            $("<td>").text(artistList),
            );

            $("#collection-table > tbody").append(newRow);
    });
});

  function artistBlurb() {
    $("#search-btn").on("click", function (event) {
      event.preventDefault();

      var aSearch = $("#artist-input").val().trim();
      var tSearch = $("#title-input").val().trim();

      var queryURL = "https://en.wikipedia.org/w/api.php?action=query&&format=json&origin=*&list=search&srsearch=" + aSearch + "%" + tSearch;

      $.ajax({
        url: queryURL,
        method: "GET"
      }).then(function (response) {

        var searchTitle = response.query.search[0].title;
        var searchSnippet = response.query.search[0].snippet;
        var pageId = response.query.search[0].pageid;

        $("#aName").html('<a href="https://en.wikipedia.org/?curid=' + pageId + '">' + searchTitle + '<i>(wikipedia excerpt)</i></a>:');
        $("#snippet").html('...' + searchSnippet + '...');
      });
    });
  };

  function artistDescription() {
    $("#search-btn").on("click", function (event) {
      event.preventDefault();

      var aSearch2 = $("#artist-input").val().trim();


      var queryURL2 = "https://en.wikipedia.org/w/api.php?action=query&&format=json&origin=*&list=search&srsearch=" + aSearch2;

      $.ajax({
        url: queryURL2,
        method: "GET"
      }).then(function (response) {

        var searchTitle2 = response.query.search[0].title;
        var searchSnippet2 = response.query.search[0].snippet;
        var pageId2 = response.query.search[0].pageid;

        $("#artistName").html('<a href="https://en.wikipedia.org/?curid=' + pageId2 + '">' + searchTitle2 + '<i>(wikipedia excerpt)</i></a>:');
        $("#description-result").html('...' + searchSnippet2 + '...');

      });
    });
  };

  artistBlurb();
  artistDescription();