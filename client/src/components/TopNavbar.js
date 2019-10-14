import React from "react";

import { connect } from "react-redux";
import AuthNavbar from "./AuthNavbar";
import UnAuthNavbar from "./UnAuthNavbar";

const TopNavbar = ({ isAuthenticated }) => {
	return (
		<nav className="navbar navbar-expand-lg bg-dark navbar-dark">
			<div className="container">
				{!isAuthenticated ? <UnAuthNavbar /> : <AuthNavbar />}
			</div>
		</nav>
	);
};

const mapStateToProps = ({ auth }) => ({
	isAuthenticated: auth.isAuthenticated
});

export default connect(mapStateToProps)(TopNavbar);
