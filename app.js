require("dotenv").config();
const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const morgan = require("morgan");
const path = require("path");
const userRouters = require("./routes/userRouters");
const { URI, PORT } = require("./utils/config/config");
const deprecationOptions = require("./utils/config/deprecationOptions");
// ******************************************

// Create an app instance
const app = express();

// Set middlers
app.use(express.urlencoded({ extended: false }));
app.use(express.json());
app.use(cors());
app.use(morgan("dev"));

// User route
app.use("/api/users", userRouters);

if (process.env.NODE_ENV === "production") {
	app.use(express.static("client/build"));
	app.get("*", (req, res) => {
		res.sendFile(path.resolve(__dirname, "client", "build", "index.html"));
	});
}

// Connect to the mongoDb with mongoose
mongoose
	.connect(URI, deprecationOptions)
	.then(() => console.log("DB is connected!"))
	.catch(err => console.log(err));

// Listen app on server port
app.listen(PORT || 5000, () => {
	console.log(`Port is running on ${PORT}`);
});
