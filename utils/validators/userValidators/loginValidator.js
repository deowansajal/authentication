const Validator = require("validator");
const isEmpty = require("../isEmpty");

const loginValidator = ({ email, password }) => {
	const error = {};
	if (isEmpty(email)) {
		error.emailError = "Email field is required!";
	} else if (!Validator.isEmail(email)) {
		error.emailError = "Please provide a valid email";
	}

	if (isEmpty(password)) {
		error.passwordError = "Password field is required!";
	} else if (password.length < 6 || password.length > 30) {
		error.passwordError = "Password must be between 6 and 30 characters!";
	}
	return {
		isValid: Object.keys(error).length === 0,
		error
	};
};

module.exports = loginValidator;
