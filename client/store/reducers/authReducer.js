import { SET_USER, ERROR } from "../actions/actionTypes";

const init = {
	isAuthenticated: false,
	user: {},
	error: {}
};

const authReducer = (state = init, action) => {
	switch (action.type) {
		case SET_USER:
			return {
				...state,
				user: action.payload.user,
				isAuthenticated: Object.keys(state.user).length !== 0,
				error: {}
			};

		case ERROR: {
			return {
				...state,
				user: {},
				isAuthenticated: Object.keys(state.user).length !== 0,
				error: action.payload.error
			};
		}
		default:
			return state;
	}
};

export default authReducer;
