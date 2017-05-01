var express = require("express");
var bodyParser = require("body-parser");
var path = require("path");

var app = express();
var PORT = 3000;

app.get("/survey", function(req, res){
	res.sendFile(path.join(__dirname, "survey.html"));
});

//TO HOME.HTML?
app.use()