import React from "react";
import { Link } from "react-router-dom";

const LinkButton = ({ text, linkText, url }) => {
	return (
		<div className="text-right">
			<p className="lead">
				{text}? <Link to={`/${url}`}>{linkText}</Link>
			</p>{" "}
		</div>
	);
};

export default LinkButton;
