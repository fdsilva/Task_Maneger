module.exports = app => {
	const env = process.env.NODE_ENV;
 	if (env) {
    	return require(`./config.${env}.js`);
  	}
  		

  		return require("./config.development.js");

/*	database: "task_maneger_API",
	username: "",
	password: "",
	params: {
		dialect: "sqlite",
		storage: "task_maneger.sqlite",
		define: {
			underscored: true
		}
	},
	jwtSecret: "Ta$k-ManegeR", //string key
	jwtSession: {session: false}// inform to passport that autenticattion whont have user session 
*/
};