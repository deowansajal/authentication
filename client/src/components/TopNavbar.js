import React from "react";

import { connect } from "react-redux";
import AuthNavbar from "./AuthNavbar";
import UnAuthNavbar from "./UnAuthNavbar";

const TopNavbar = ({ isAuthenticated }) => {
	return (
		<nav className="navbar navbar-expand-lg bg-dark navbar-dark fixed-top">
			<div className="container">
				<button
					class="navbar-toggler ml-auto"
					type="button"
					data-toggle="collapse"
					data-target="#navbarNav"
				>
					<span class="navbar-toggler-icon"></span>
				</button>
				{!isAuthenticated ? <UnAuthNavbar /> : <AuthNavbar />}
			</div>
		</nav>
	);
};

const mapStateToProps = ({ auth }) => ({
	isAuthenticated: auth.isAuthenticated
});

export default connect(mapStateToProps)(TopNavbar);
