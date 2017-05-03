
app.get("/survey", function(req, res){
	res.sendFile(path.join(__dirname, "../public/survey.html"));
});


app.use('/', express.static('app', {index: "home.html"}));	


