module.exports = app =>{
	const Tasks = app.db.models.tasks;

	app.get("/tasks", (req, res) => {
		Tasks.findAll({}).then (tasks => {
			res.json({tasks: tasks});
		});
		});
	/*res.json({
		tasks: [
			{title: "By a car"},
			{title: "feed the cat"},
		   ]
		});*/
	});
};