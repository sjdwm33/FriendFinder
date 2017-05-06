
	var friends = require("../data/friends.js");
	var path = require("path");
function appAPI(app){
	app.get("/api/friends", function(req, res){
	res.sendFile(path.join(__dirname, "../data/friends.js"));
	return res.json(friends)
});

// app.post("/api/friends", function(req, res){
// 	var userData = req.body;
// 	friends.push(userData);
// 	res.json(true);
// });

app.post('/api/friends', function(req, res){
	var userMatch = {
		name: "",
		photo: "",
		scoreDifference: 1000,
	};

	var userData = req.body;
	var userName = userData.name;
	var userPhoto = userData.photo;
	var userScores = userData.scores;

	var totalDifference = 0;

	for (var i = 0; i < friends.length; i++) {
		totalDifference = 0;

		for (var m = 0; m < friends[i].scores[m]; m++) {
			totalDifference += Math.abs(parseInt(userScores[m]) - parseInt(friends[i].scores[m]));

			if (totalDifference <= userMatch.scoreDifference){
				userMatch.name = friends[i].name;
				userMatch.photo = friends[i].photo;
				userMatch.scoreDifference = totalDifference;
			}
		}
	}
	friends.push(userData);
	res.json(userMatch);
})
};

module.exports = appAPI;


