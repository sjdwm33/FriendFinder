

app.get("/api/friends", function(req, res){
	res.sendFile(path.join(__dirname, "../data/friends.js"));
});

app.post("/api/friends", function(req, res){
	// var newReservation = req.body;

	// tablesData.push(newReservation);
	// res.json(tablesData.length <=5);
});
