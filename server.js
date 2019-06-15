/***********************************************
 * Project: Friend Finder
 * Developer: Sean Bryan
 * Date: 2019-06-15
 ***********************************************/
//Dependencies
var express = require("express");
var path = require("path");
var friends = require("./app/data/friends");

//Set up Express App
var app = express();
var PORT = process.env.PORT || 3000;
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.get("/", function (req, res) {
    res.send("Welcome to the Friend Page");
});

app.get("/api/friends", function (req, res) {
    return res.json(friends.friends);
});


// Listener
// ===========================================================
app.listen(PORT, function () {
    console.log("App listening on PORT " + PORT);
});