module.exports = app =>{
	//if(process.env.NODE_ENV !== "test"){
	app.db.sequelize.sync().done(()=> {
		app.listen(app.get("port"), () => {
		console.log(`Server API - port ${app.get("port")}`);
	});	
   });
// }
}