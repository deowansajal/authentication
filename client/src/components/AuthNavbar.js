import React from "react";
import { NavLink } from "react-router-dom";

const AuthNavbar = () => {
	return (
		<div className="collapse navbar-collapse" id="navbarNav">
			<ul className=" navbar-nav ml-auto">
				<li className="nav-link">
					<NavLink exact to="/" activeStyle={{ opacity: 1 }}>
						HOME
					</NavLink>
				</li>

				<li className="nav-link">
					<NavLink exact to="/logout" activeStyle={{ opacity: 1 }}>
						LOGOUT
					</NavLink>
				</li>
			</ul>
		</div>
	);
};

export default AuthNavbar;
