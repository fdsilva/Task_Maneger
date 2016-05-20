module.exports = app =>{
	app.listen(app.get("port"), ()=>{
		console.log(`Server API - port ${app.get("port")}`);
	});
}