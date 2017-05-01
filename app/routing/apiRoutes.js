var express = require("express");
var bodyParser = require("body-parser");
var path = require("path");

var app = express();
var PORT = 3000;

app.get("/api/friends", function(req, res){
	res.sendFile(path.join(__dirname, "friends.js"));
});

app.post("/api/friends", function(req, res){
	// var newReservation = req.body;

	// tablesData.push(newReservation);
	// res.json(tablesData.length <=5);
});
