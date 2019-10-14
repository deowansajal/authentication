const bcrypt = require("bcrypt");
const User = require("../../models/User");
const loginValidator = require("../../utils/validators/userValidators/loginValidator");
const { serverError, resourceError } = require("../../utils/errors/errors");
const generateJWT = require("../../utils/config/generateJWT");

/********************************************************************/

const login = async (req, res) => {
	const { email, password } = req.body;

	const { error, isValid } = loginValidator({ email, password });
	if (!isValid) return resourceError(res, error);

	try {
		const findUser = await User.findOne({ email });
		if (!findUser) return resourceError(res, "User doesn't Exist", 404);
		const match = bcrypt.compare(password, findUser.password);
		if (!match) return resourceError(res, "Email Or Password is Incorrect");

		const token = generateJWT({
			_id: findUser._id,
			name: findUser.name,
			email: findUser.email
		});
		res.json({
			message: "Login Successful!, Welcome to the Home ",
			token: `Berar ${token}`
		});
	} catch (error) {
		serverError(res, error);
	}
};

module.exports = login;
