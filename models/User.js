const { Schema, model } = require("mongoose");
const common = require("../utils/common/commonSchema");

const UserSchema = new Schema({
	name: { ...common },
	email: { ...common },
	password: { ...common },
	accountStatus: { type: String, default: "PENDING" },
	isActive: { type: Boolean, default: false },
	activatedToken: String,
	date: { type: Date, default: Date.now }
});

module.exports = model("User", UserSchema);
