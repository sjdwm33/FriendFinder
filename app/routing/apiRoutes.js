function appAPI(app){
	var friends = require("../data/friends.js");
	var path = require("path");
	
	app.get("/api/friends", function(req, res){
	res.sendFile(path.join(__dirname, "../data/friends.js"));
	return res.json(friends.friends)
});

app.post("/api/friends", function(req, res){
	var userData = req.body;
	friends.friends.push(userData);
	res.json(true);
});
};

module.exports = appAPI;


