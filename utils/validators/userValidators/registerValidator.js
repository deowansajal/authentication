const Validator = require("validator");
const isEmpty = require("../isEmpty");

const registerValidator = ({ name, email, password, confirmPassword }) => {
	const error = {};

	if (isEmpty(name)) {
		error.nameError = "Name Field is Required!";
	} else if (name.length < 3) {
		error.nameError = "Name must be between 3 and 30 Characters!";
	}
	if (isEmpty(email)) {
		error.emailError = "Email Field is Required!";
	} else if (!Validator.isEmail(email)) {
		error.emailError = "Please Provide a Valid email";
	}
	if (isEmpty(password)) {
		error.passwordError = "Password Field is Required!";
	} else if (password.length < 6 || password.length > 30) {
		error.passwordError = "Password must be between 6 and 30 Characters!";
	}
	if (isEmpty(confirmPassword)) {
		error.confirmPasswordError = "ConfirmPassword field is Required!";
	} else if (password !== confirmPassword) {
		error.confirmPasswordError = "ConfirmPassword doesn't match!";
	}

	return {
		isValid: Object.keys(error).length === 0,
		error
	};
};

module.exports = registerValidator;
