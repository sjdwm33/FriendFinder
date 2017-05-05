
function appHtml(app){
app.get("/survey", function(req, res){
	var path = require("path");
	res.sendFile(path.join(__dirname, "../public/survey.html"));
});

app.use(function(req, res){
		res.sendFile(__dirname, "../../server.js")
	});
};

// function appDefault(app){
// 	app.use(function(req, res){
// 		res.sendFile(__dirname, "../../server.js")
// 	});
// };



module.exports = appHtml;
// module.exports = appDefault;