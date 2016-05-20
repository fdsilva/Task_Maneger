module.exports = app => {
	app.get("/", (req, res) => {
		res.json ({status: "Task_manager_API"});
	});
};