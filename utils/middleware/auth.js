const JWT = require("jsonwebtoken");
const User = require("../../models/User");
module.exports = async (req, res, next) => {
	let token = req.headers.authorization;

	if (!token) return res.status(401).json({ message: "Unauthorized!" });
	token = token.split(" ")[1];

	try {
		const decoded = JWT.verify(token, process.env.JWT_SECRET);
		const findUser = await User.findById(decoded._id);
		if (!findUser)
			return res.status(404).json({ message: "User doesn't exist" });

		req.user = decoded;
		next();
	} catch (err) {
		console.log(err);
		res.status(401).json({ message: "Unauthorized! from catch" });
	}
};
