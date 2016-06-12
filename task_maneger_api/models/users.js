import bcrypt from "bcrypt";

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
		password: {
			type: DataType.STRING,
			allowNull:false,
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
		// Function to encrypt password
		hooks: {
			beforeCreate: user => {
				const salt = bcrypt.genSaltSync();
				user.password = bcrypt.hashSync(user.password, salt);
			}
		},

		classMethods: {
			associate: (models) =>{
				Users.hasMany(models.Tasks);
			},//check if the encript pass is equals to store password
			isPassword: (encodedPassword, password) => {
				return bcrypt.compareSync(password, encodedPassword);
			}
		}
	});
	return Users;
};