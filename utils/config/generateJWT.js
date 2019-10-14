const JWT = require("jsonwebtoken");
const { JWT_SECRET } = require("../config/config");

module.exports = payload => JWT.sign(payload, JWT_SECRET, { expiresIn: "3h" });
