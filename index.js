//var espress = require('espress');
import express from "express";

const PORT  = 3000;
const app = express();

app.get("/", (req, res) => res.json({starus: "Task_MAneger_API"}));

app.listen(PORT, () => console.log('Task_Maneger_API -Port ${PORT}'));