// // import { SET_ERROR, SET_MESSAGE } from "../actions/actionTypes";

// const message = {
// 	success: "",
// 	error: "",
// 	warning: ""
// };

// const init = {
// 	message: {
// 		register: { ...message },
// 		login: { ...message }
// 	},

// 	error: {
// 		message: "",
// 		resourceError: {},
// 		serverError: {}
// 	},
// 	isLoading: true
// };

// const _utilsReducer = (state = init, { type, payload }) => {
// 	switch (type) {
// 		case SET_ERROR:
// 			return { ...init, error: { ...init.error, ...payload } };
// 		case SET_MESSAGE:
// 			return { ...init, message: { ...init.message, ...payload } };

// 		default:
// 			return state;
// 	}
// };

// // export default _utilsReducer;
