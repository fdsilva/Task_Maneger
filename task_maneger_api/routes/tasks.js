module.exports = app =>{
	const Tasks = app.models.tasks;

	app.get("/tasks", (req, res) => {
		Tasks.findAll({}, (tasks)=> {
			res.json({tasks: tasks});
		});
	/*res.json({
		tasks: [
			{title: "By a car"},
			{title: "feed the cat"},
		   ]
		});*/
	});
};