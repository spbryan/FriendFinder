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
        var bff = findBFF(newFriend);
        res.json(bff);
    });
};

/**
 * Match input scores against those in the current array
 * to find the closest match
 * @param newFriend 
 */
function findBFF(newFriend) {
    var scoreMatch = 100;
    var matchIndex = 0;

    for (var i = 0; i < friend.friends.length; i++) {
        var totalDifference = 0;
        for (var x = 0; x < newFriend.scores.length; x++) {
            var diff = friend.friends[i].scores[x] - newFriend.scores[x];
            totalDifference += Math.abs(diff);
        }
        if (totalDifference < scoreMatch) {
            scoreMatch = totalDifference;
            matchIndex = i;
        }
    }

    return friend.friends[matchIndex];
}