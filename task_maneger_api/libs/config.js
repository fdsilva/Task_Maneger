module.exports = {
	database: "task_maneger_API",
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
	jwtSession: {session: false}
};