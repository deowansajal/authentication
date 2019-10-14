import { combineReducers } from "redux";
import authReducer from "./authReducer";
import utilsReducer from "./utilsReducer";

const rootReducer = combineReducers({
	auth: authReducer,
	utils: utilsReducer
});

export default rootReducer;
