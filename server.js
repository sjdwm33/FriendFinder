var express = require("express");
var bodyParser = require("body-parser");
var path = require("path");
var _ = require("lodash");


var friends = require("./app/data/friends.js");
var appHtml = require("./app/routing/htmlroutes.js");
var appApi = require("./app/routing/apiRoutes.js")


var app = express();
app.set('port', (process.env.PORT || 3000));

// Sets up the Express app to handle data parsing
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.text());
app.use(bodyParser.json({ type: "application/vnd.api+json" }));


app.get("/", function(req, res){
	res.sendFile(path.join(__dirname, "/app/public/home.html"));
});

appHtml(app);

appApi(app);




app.listen(app.get('port'), function() {
  console.log('Node app is running on port', app.get('port'));
});