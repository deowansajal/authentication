import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";

import "../App.css";
import Register from "../pages/Register";
import Login from "../pages/Login";
import Home from "../pages/Home";
import TopNavbar from "./TopNavbar";
import NotFound from "./NotFound";
import Logout from "./Logout";
import PublicRoute from "./PublicRoute";
import PrivateRoute from "./PrivateRoute";
// import ServerError from "./ServerError";
console.log(process.env.NODE_ENV);

const App = () => {
	return (
		<BrowserRouter>
			<TopNavbar />
			<div className="container">
				<Switch>
					<PublicRoute path="/register" component={Register} />
					<PublicRoute path="/login" component={Login} />
					<PrivateRoute exact path="/" component={Home} />
					<PrivateRoute path="/logout" component={Logout} />
					<Route render={props => <NotFound {...props} />} /> />
					{/* 
					<PrivateRoute exact path="/" component={Home} />

					<Route
						path="/server/error"
						render={props => <ServerError {...props} />}/> */}
				</Switch>
			</div>
		</BrowserRouter>
	);
};

export default App;
