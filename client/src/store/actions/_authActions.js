// import Axios from "axios";
// import jwtDecode from "jwt-decode";
// import _ from "lodash";

// import { SET_USER, SET_ERROR, SET_MESSAGE } from "./actionTypes";
// // import AxiosHeaders from "../../utils/AxiosHeaders";

// const setUser = user => ({ type: SET_USER, payload: user });
// const setMessage = message => ({ type: SET_MESSAGE, payload: message });
// const setError = error => {
// 	if (!_.isString(error)) {
// 		return { type: SET_ERROR, payload: { resourceError: error } };
// 	} else {
// 		return { type: SET_ERROR, payload: { message: error } };
// 	}
// };

// const register = (user, history) => dispatch => {
// 	Axios.post("/api/users/register", user)
// 		.then(data => {
// 			dispatch(setMessage({ success: data.data.message }));
// 			dispatch(setError({}));
// 			history.push("/login");
// 		})
// 		.catch(err => {
// 			dispatch(setUser({ user: {} }));
// 			dispatch(setError(err.response.data.message));
// 		});
// };

// const login = (user, history) => dispatch => {
// 	Axios.post("/api/users/login", user)
// 		.then(data => {
// 			const { message, token } = data.data;
// 			localStorage.setItem("auth_token", token);
// 			const decode = jwtDecode(token);
// 			dispatch(setUser({ user: decode }));
// 			dispatch(setMessage({ success: message }));
// 			history.push("/");
// 		})
// 		.catch(err => {
// 			if (err.response.status === 500) {
// 				dispatch(
// 					setError({
// 						serverError:
// 							err.response.data.message || "Internal Server Error"
// 					})
// 				);
// 			} else {
// 				dispatch(setError(err.response.data.message));
// 			}
// 		});
// };

// export { register, login };
