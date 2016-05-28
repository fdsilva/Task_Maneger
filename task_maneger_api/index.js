//var espress = require('espress');
import express from "express";
import consingn from "consign";
//const PORT  = 3000;

const app = express();
//Formating json 
//app.set("json spaces", 4);

consingn()
	.include("libs/config.js")
	.then("db.js")
	.then("auth.js")
	.then("libs/middlewares.js")
	.then("routes")
	.then("libs/boot.js")
	.into(app);
