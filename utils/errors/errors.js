const serverError = (res, error) => {
	console.log(error);
	return res.status(500).json({ error: "Internal Server Error Occurred!" });
};

const resourceError = (res, error, code = 400) => {
	console.log(`code: ${code}`);
	return res.status(code).json({ error });
};

module.exports = {
	serverError,
	resourceError
};
