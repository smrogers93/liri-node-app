require("dotenv").config();

var keys = require("./keys.js");
var axios = require("axios");
var Spotify = require("node-spotify-api");





switch (process.argv[2]) {
    case "concert-this":
        break
    case "spotify-this-song":
        break
    case "movie-this":
        var movieName = process.argv[3]
        var queryUrl = "http://www.omdbapi.com/?t=" + movieName + "&y=&plot=short&apikey=trilogy";
        axios.get(queryUrl).then(
            function(response) {
                console.log(
                "\n------------\n" 
                + "Title: " + response.data.Title
                + "\nRelease Date: " + response.data.Year
                + "\nIMDB: " + response.data.imdbRating
                + "\nCountry: " + response.data.Country
                + "\nLanguage: " + response.data.Language
                + "\nPlot: " + response.data.Plot
                + "\nActors: " + response.data.Actors
                + "\n------------\n")
            }
        )
        break
    case "do-what-it-says":
        break

}