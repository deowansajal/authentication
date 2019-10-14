import React from "react";

const NotFound = ({ location: { pathname } }) => {
	return (
		<div
			className="container d-flex"
			style={{ height: "calc(100vh - 60px)" }}
		>
			<div className="m-auto">
				<h2 className="display-4">404 Page Not Found</h2>
				<p className="lead">
					The requested URL {pathname} was not found on this server.
					That’s all we know.
				</p>
			</div>
		</div>
	);
};

export default NotFound;
