/***********************************************
 * Project: Friend Finder
 * Developer: Sean Bryan
 * Date: 2019-06-15
 ***********************************************/
var friend = require('../data/friends');
var path = require("path");

module.exports = function (app) {
    // app.get("/", function (req, res) {
    //     res.send("Welcome to the Friend Page");
    // });

    app.get("/api/friends", function (req, res) {
        return res.json(friend.friends);
    });

    app.post("/api/friends", function (req, res) {
        var newFriend = req.body;
        console.log(newFriend);
        var friendList = friend.friends;
        var numericScores = newFriend.scores.map(function (x) {
            return parseInt(x, 10);
        });
        newFriend.scores = numericScores;
        friendList.push(newFriend);
        res.json(newFriend);
        // res.redirect(307, path.join(__dirname, "/../public/home.html"));
    });

    // function convertScores(scores) {
    //     for(var i = 0; i < scores.length; i++)
    //     return scores;
    // }
};