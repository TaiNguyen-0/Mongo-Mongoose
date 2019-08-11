var express = require("express");
var expressHandlebars = require("express-handlebars");
var bodyParser = require("body-parser");
// var logger = require("morgan");
var mongoose = require("mongoose");

// Connects Handlebars w/ Express app
app.engine("handlebars", expressHandlebars({
    defaultLayout: "main"
}));
app.set("view engine", "handlebars");

app.use(bodyParser.urlencoded({
    extended: false
}));
// Our scraping tools
// Axios is a promised-based http library, similar to jQuery's Ajax method
// It works on the client and on the server
var axios = require("axios");
var cheerio = require("cheerio");

// Require all models
// var db = require("./models");

var PORT = 3000 || process.env.PORT;

// Initialize Express
var app = express();

// Sets up a Express Route
var router = express.Router();

// Designate the publick folder as a static folder
app.use(express.static(__dirname + "/public"));

// Have every request go through our router middleware
app.use(router);

// Start the server
app.listen(PORT, function() {
    console.log("App running on port " + "http://localhost:" + PORT);
});