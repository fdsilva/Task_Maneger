//var espress = require('espress');
import express from "express";
import consingn from "consign";
//const PORT  = 3000;

const app = express();
//Formating json 
app.set("json spaces", 4);

consingn()
	.include("models")
	.then("libs/middlewares.js")
	.then("routes")
	.then("libs/boot.js")
	.into(app);
//app.get("/", (req, res) => res.json({starus: "Task_MAneger_API"}));
/*
app.get("/tasks", (req, res) =>{
	res.json({
		tasks: [
		{title: "By a car"},
		{title: "feed the cat"},
		]
	});
});
*/
//app.listen(PORT, () => console.log(`Task_Maneger_API -Port ${PORT}`));