module.exports = input =>
	input === undefined ||
	input === null ||
	(typeof input === "string" && input.trim().length === 0);
