import React from "react";
import { NavLink } from "react-router-dom";

const UnAuthNavbar = () => {
	return (
		<div className="collapse navbar-collapse " id="navbarNav">
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
		</div>
	);
};

export default UnAuthNavbar;
