import React, { useState, useEffect } from "react";
import { connect } from "react-redux";
import { Redirect } from "react-router-dom";

const ServerError = ({ serverErr, serverError, location }) => {
	const [prevPath, setPrevPath] = useState("");

	useEffect(() => {
		if (location.pathname !== prevPath) {
			setPrevPath(location.pathname);
		}

		return () => {
			if (location.pathname === prevPath) {
				serverError();
			}
		};
	}, [location.pathname, prevPath, serverError]);

	if (!serverErr) {
		return (
			<Redirect
				to={{
					pathname: prevPath,
					state: { from: location }
				}}
			/>
		);
	}

	console.log(location.pathname);
	return (
		<div
			className="container d-flex"
			style={{ height: "calc(100vh - 60px)" }}
		>
			<div className="m-auto">
				<h2 className="display-4">500 {serverErr}</h2>
				<p className="lead">
					Opps! Something went wrong on the server we are trying to
					solve the problem ASAP please refresh the browser and try
					again
				</p>
			</div>
		</div>
	);
};

const mapStateToProps = state => ({
	serverErr: state.auth.error.serverErr
});
const mapDispatchToProps = dispatch => ({
	serverError: () => dispatch({ type: "ERROR", payload: { serverErr: "" } })
});

export default connect(
	mapStateToProps,
	mapDispatchToProps
)(ServerError);
