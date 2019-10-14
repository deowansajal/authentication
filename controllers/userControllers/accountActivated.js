const User = require("../../models/User");
const { serverError, resourceError } = require("../../utils/errors/errors");
const { ACTIVE } = require("../../utils/common/userAccountStatus");
const { LOGIN_LINK } = require("../../utils/config/config");
const { MAIL_USER } = require("../../utils/config/_nodemailer");
const accountActivatedTemplate = require("../../utils/templates/accountActivatedTemplate");
const transporter = require("../../utils/config/_nodemailer");

const accountActivated = async (req, res) => {
	const verifiedUser = req.verifiedToken;

	try {
		const user = await User.findById(verifiedUser._id);

		if (!user) return resourceError(res, "User Not Found", 404);

		if (!user.isActive) {
			const updateUser = await User.findByIdAndUpdate(
				user._id,
				{
					$set: {
						isActive: true,
						accountStatus: ACTIVE,
						activatedToken: ""
					}
				},
				{ new: true }
			).select("-password");

			const html = accountActivatedTemplate({
				name: updateUser.name,
				link: LOGIN_LINK
			});
			transporter().sendMail({
				from: `MD. SAJAL <${MAIL_USER}>`,
				to: updateUser.email,
				subject: "Verified Your Account!",
				html
			});

			return res.json({ updateUser });
		}
		return resourceError(res, "Account Already Activated!");
	} catch (error) {
		serverError(res, error);
	}
};

module.exports = accountActivated;
