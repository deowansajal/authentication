const router = require("express").Router();
const User = require("../models/User");
const register = require("../controllers/userControllers/register");
const login = require("../controllers/userControllers/login");
const accountActivated = require("../controllers/userControllers/accountActivated");
const jwtVerified = require("../utils/middleware/jwtVerify");

// const auth = require("../utils/middleware/auth");

// router.get("/:id", auth, getUsers);

router.post("/register", register);

router.get("/verify/:token", jwtVerified, accountActivated);

router.post("/login", login);

// router.patch("update/:id", auth, updateUser);

// router.delete("/delete/:id", auth, deleteUser);

// Helper Routes

router.delete("/delete/:name", async (req, res) => {
	const deleteUser = await User.findOneAndDelete({ name: req.params.name });
	res.json({ deleteUser });
});

module.exports = router;
