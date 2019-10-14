import React from "react";
import { Route, Redirect } from "react-router-dom";
import { connect } from "react-redux";

const PublicRoute = ({
	component: Component,
	isAuthenticated,
	path,
	...rest
}) => {
	return (
		<Route
			exact
			path={path}
			{...rest}
			render={props =>
				!isAuthenticated ? (
					<Component history={props.history} />
				) : (
					<Redirect
						to={{
							pathname: "/",
							state: { from: props.location }
						}}
					/>
				)
			}
		/>
	);
};

const mapStateToProps = ({ auth }) => ({
	isAuthenticated: auth.isAuthenticated
});

export default connect(mapStateToProps)(PublicRoute);
