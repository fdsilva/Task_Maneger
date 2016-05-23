module.exports = (sequelize, DataType) => {
	const Users = sequelize.define("Users", {
		id: {
			type: DataType.INT,	
			primaryKey: true,
			autoIncrement: true
		},
		name: {
			type: DataType.STRING,
			allowNull: false,
			validate: {
				noEmpty: true
			}
		},
		email: {
			type: DataType.STRING,
			unique:true,
			allowNull: false,
			validate: {
				noEmpty: true
			}
		}
	},{
		classMethods: {
			associate: (models) =>{
				Users.hasMany(models.Tasks);
			}
		}
	});
	return Users;
};