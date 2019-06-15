/***********************************************
 * Project: Friend Finder
 * Developer: Sean Bryan
 * Date: 2019-06-15
 ***********************************************/
//Dependencies
var express = require("express");
var path = require("path");
var router = require("./app/routing/apiRoutes");

//Set up Express App
var app = express();
var PORT = process.env.PORT || 8080;
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

//ROUTER
require('./app/routing/apiRoutes')(app); 

// Listener
// ===========================================================
app.listen(PORT, function () {
    console.log("App listening on PORT " + PORT);
});