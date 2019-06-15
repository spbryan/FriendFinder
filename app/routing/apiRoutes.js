/***********************************************
 * Project: Friend Finder
 * Developer: Sean Bryan
 * Date: 2019-06-15
 ***********************************************/
var friend = require('../data/friends');

module.exports = function (app) {
    app.get("/", function (req, res) {
        res.send("Welcome to the Friend Page");
    });

    app.get("/api/friends", function (req, res) {
        return res.json(friend.friends);
    });
};