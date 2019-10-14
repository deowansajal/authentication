import React from "react";

const PrimaryButton = ({ type, text }) => {
	return (
		<button
			type={type ? type : null}
			className="btn btn-primary btn-block mb-4"
		>
			{text}
		</button>
	);
};

export default PrimaryButton;
