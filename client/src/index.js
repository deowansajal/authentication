import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import "bootstrap/dist/css/bootstrap.min.css";
import App from "./components/App";
import { createStore, applyMiddleware, compose } from "redux";
import { Provider } from "react-redux";
import thunk from "redux-thunk";
import rootReducer from "./store/reducers/rootReducer";
import jwtDecode from "jwt-decode";
import { SET_USER } from "./store/actions/actionTypes";

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const middleware = [thunk];

const store = createStore(
	rootReducer,
	composeEnhancers(applyMiddleware(...middleware))
);

const auth_token = localStorage.getItem("auth_token");

if (auth_token) {
	store.dispatch({
		type: SET_USER,
		payload: { user: jwtDecode(auth_token) }
	});
}

ReactDOM.render(
	<Provider store={store}>
		<App />
	</Provider>,
	document.getElementById("root")
);
