import React from "react";
import { NavLink } from "react-router-dom";

const UnAuthNavbar = () => {
	return (
		<ul className="navbar-nav ml-auto">
			<li className="nav-link">
				<NavLink exact to="/register" activeStyle={{ opacity: 1 }}>
					REGISTER
				</NavLink>
			</li>

			<li className="nav-link">
				<NavLink to="/login" activeStyle={{ opacity: 1 }}>
					LOGIN
				</NavLink>
			</li>
		</ul>
	);
};

export default UnAuthNavbar;
