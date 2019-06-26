require("dotenv").config();

var keys = require("./keys.js");
var axios = require("axios");
var moment = require("moment");
var fs = require("fs");



switch (process.argv[2]) {
    case "concert-this":
        var artist = process.argv[3];
        var queryUrl = "https://rest.bandsintown.com/artists/" + artist + "/events?app_id=codingbootcamp";
        axios.get(queryUrl).then(
            function(response) {
                console.log(
                    "\n------------\n"
                    + "Date: " + moment(response.data[0].datetime).format("L")
                    + "\nVenue: " + response.data[0].venue.name
                    + "\nLocation: " + response.data[0].venue.city + ", " + response.data[0].venue.region
                    + "\n------------\n"
                    +
                    "\n------------\n"
                    + "Date: " + moment(response.data[1].datetime).format("L")
                    + "\nVenue: " + response.data[1].venue.name
                    + "\nLocation: " + response.data[1].venue.city + ", " + response.data[1].venue.region
                    + "\n------------\n"
                    +
                    "\n------------\n"
                    + "Date: " + moment(response.data[2].datetime).format("L")
                    + "\nVenue: " + response.data[2].venue.name
                    + "\nLocation: " + response.data[2].venue.city + ", " + response.data[2].venue.region
                    + "\n------------\n")
            }
        )
        break
    // case "spotify-this-song":
    //     var songSearch = process.argv[3];
    //     spotify.search({type:"track", query: songSearch}).then(function(response) {
    //         console.log(response)
    //     })
        break
    case "movie-this":
        var movieName = process.argv[3];
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