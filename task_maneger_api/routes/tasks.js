module.exports = app =>{
	app.get("/tasks", (req, res) =>{
	res.json({
		tasks: [
			{title: "By a car"},
			{title: "feed the cat"},
		   ]
		});
	});
};