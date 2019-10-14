const nodemailer = require("nodemailer");
const { EMAIL_USER, EMAIL_PASS } = require("../config/config");

module.exports = () => {
	return nodemailer.createTransport({
		service: "gmail",
		secure: false,
		port: 25,
		auth: {
			user: EMAIL_USER,
			pass: EMAIL_PASS
		}
	});
};
