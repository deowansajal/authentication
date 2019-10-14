const bcrypt = require("bcrypt");
const User = require("../../models/User");
const registerValidator = require("../../utils/validators/userValidators/registerValidator");
const { serverError, resourceError } = require("../../utils/errors/errors");
const emailVerificationTemplate = require("../../utils/templates/emailVerificationTemplate");
const { VERIFY_LINK, MAIL_USER } = require("../../utils/config/config");
const generateJWT = require("../../utils/config/generateJWT");
const transporter = require("../../utils/config/_nodemailer");

/********************************************************************/

const register = async (req, res) => {
	const { name, email, password } = req.body;
	const { isValid, error } = registerValidator(req.body);

	if (!isValid) return resourceError(res, error);

	try {
		const hasUser = await User.findOne({ email });
		if (hasUser)
			return resourceError(res, { emailError: "Email has been taken!" });

		const user = new User({ name, email, password });
		const hash = await bcrypt.hash(password, 10);
		user.password = hash;

		const { _id } = await user.save();

		const activatedToken = generateJWT({ _id, name, email });

		const updateUser = await User.findByIdAndUpdate(
			_id,
			{ $set: { activatedToken } },
			{ new: true }
		);

		const template = emailVerificationTemplate({
			name: updateUser.name,
			link: `${VERIFY_LINK}/${updateUser.activatedToken}`
		});
		transporter().sendMail({
			from: `D1 <${MAIL_USER}>`,
			to: updateUser.email,
			subject: "Verify Your Email!",
			html: template
		});

		return res
			.status(201)
			.json({ newUser: updateUser, message: "Register Successful!" });
	} catch (error) {
		serverError(res, error);
	}
};

module.exports = register;
