// Handle All Errors
const catchError = ({ res, error, code, msg }) => {
	if (code && code !== 500) {
		return res.status(code || 400).json({ message: error || msg });
	} else {
		console.log(error);
		return res.status(500).json({ error: "Error Occurred!" });
	}
};

module.exports = catchError;
