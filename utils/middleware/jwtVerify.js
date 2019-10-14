const JWT = require("jsonwebtoken");
const { JWT_SECRET } = require("../config/config");
const { serverError } = require("../errors/errors");

const jwtVerify = (req, res, next) => {
	const token = req.params.token;
	JWT.verify(token, JWT_SECRET, (err, decoded) => {
		if (err) return serverError(res, err);
		req.verifiedToken = decoded;
		next();
	});
};

module.exports = jwtVerify;
