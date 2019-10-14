import React, { useEffect } from "react";
import { connect } from "react-redux";
import { Redirect } from "react-router-dom";

import { logout } from "../store/actions/authActions";

const Logout = ({ location, logout }) => {
	useEffect(() => {
		localStorage.removeItem("auth_token");
		logout();
		console.log("I am inside of logout...");
	}, [logout]);

	return <Redirect to={{ pathname: "/login", state: { state: location } }} />;
};

export default connect(
	null,
	{ logout }
)(Logout);
