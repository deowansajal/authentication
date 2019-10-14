import _ from "lodash";

import { SET_USER, ERROR, CLEAR_MESSAGE } from "../actions/actionTypes";

const init = {
	user: {},
	isAuthenticated: false,
	messages: {
		registerSuccess: "",
		registerError: "",
		loginSuccess: "",
		loginError: ""
	},
	errors: { registerError: {}, loginError: {}, serverError: {} }
};

const authReducer = (state = init, { type, payload }) => {
	// console.log(`inside of payload ${JSON.stringify(payload)}`);
	switch (type) {
		case SET_USER:
			return {
				...state,
				user: { ...payload.user },
				isAuthenticated: _.keys(payload.user).length !== 0,
				messages: { ...init.messages, ...payload.message },
				errors: { ...init.errors }
			};

		case CLEAR_MESSAGE:
			return {
				...state,
				messages: { ...init.messages, ...payload.message }
			};

		case ERROR: {
			return {
				...state,
				user: {},
				errors: { ...init.errors, ...payload.error },
				messages: { ...init.messages, ...payload.message }
			};
		}
		default:
			return state;
	}
};

export default authReducer;
