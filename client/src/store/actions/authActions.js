import Axios from "axios";
import jwtDecode from "jwt-decode";
import { SET_USER, ERROR } from "./actionTypes";
import _ from "lodash";

const setUser = (dispatch, user, message) => {
	return dispatch({
		type: SET_USER,
		payload: { user, message }
	});
};

const setError = (dispatch, error, status) => {
	const errorType = _.values(error)[0];
	if (_.isObject(errorType)) {
		return dispatch({
			type: ERROR,
			payload: { error }
		});
	} else {
		return dispatch({
			type: ERROR,
			payload: { message: error }
		});
	}
};

const register = (user, history) => dispatch => {
	Axios.post("/api/users/register", user)
		.then(data => {
			const { message } = data.data;
			setUser(dispatch, {}, { registerSuccess: message });
			history.push("/login");
		})
		.catch(err => {
			const { data, status } = err.response;
			setError(dispatch, { registerError: data.error }, status);
		});
};

const login = (user, history) => dispatch => {
	Axios.post("/api/users/login", user)
		.then(data => {
			console.log(data);
			const { message, token } = data.data;
			localStorage.setItem("auth_token", token);
			const decode = jwtDecode(token);
			setUser(dispatch, decode, { loginSuccess: message });
			history.push("/");
		})
		.catch(err => {
			console.log(err);
			const { data, status } = err.response;
			setError(dispatch, { loginError: data.error }, status);
		});
};

const logout = () => dispatch => setUser(dispatch, {}, {});

export { register, login, setUser, logout };
