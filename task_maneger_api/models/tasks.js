module.exports = app => {
	return{
		findAll: (params, callback) =>{
			return callback([	
				{title: "By a car"},
				{title: "feed the cat"},
			]);
		}
	};
};