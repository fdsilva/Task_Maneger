//var espress = require('espress');
import express from "express";
const PORT  = 3000;

const app = express();

app.get("/", (req, res) => res.json({starus: "Task_MAneger_API"}));

app.get("/tasks", (req, res) =>{
	res.json({
		tasks: [
		{title: "By a car"},
		{title: "feed the cat"},
		]
	});
});

app.listen(PORT, () => console.log(`Task_Maneger_API -Port ${PORT}`));