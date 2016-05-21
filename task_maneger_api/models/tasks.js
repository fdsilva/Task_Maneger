module.exports = app => {
	return{
		findAll: (params, callback) =>{
			return callback([	
				{title: "By a car"},
				{title: "feed the cat"},
				{title: "feed the cat"},
				{title: "Eat the apple"},
				{title: "Listen Music"},
				{title: "Play guitar"},
				{title: "Walk on the beach"},
				{title: "Bicicle race"},
				{title: "Take a break"},
				{title: "Hello, It's me, MARIO!!!!!"},
				{title: "Ohhh Jungle people... "}
			]);
		}
	};
};