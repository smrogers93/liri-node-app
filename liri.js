require("dotenv").config();

var keys = require("./keys.js");
var axios = require("axios");





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
                + "Release Date: " + response.data.Year
                + "IMDB: " + response.data.imdbRating
                + "Country: " + response.data.Country
                + "Language: " + response.data.Language
                + "Plot: " + response.data.Plot
                + "Actors: " + response.data.Actors
                + "\n------------\n")
            }
        )
        break
    case "do-what-it-says":
        break

}