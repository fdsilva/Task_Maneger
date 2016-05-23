module.exports = app =>{
	app.db.sequenize.sync().done(()=> {
		app.listen(app.get("port"), ()=>{
		console.log(`Server API - port ${app.get("port")}`);
	});	
   });
}