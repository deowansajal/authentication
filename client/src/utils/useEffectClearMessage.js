import { useEffect } from "react";
import _ from "lodash";
import { CLEAR_MESSAGE } from "../store/actions/actionTypes";

const useEffectClearMessage = (msg, setMessages, dispatch) => {
	useEffect(() => {
		const isMsg = _.values(msg).filter(m => m !== "");

		if (isMsg.length !== 0) {
			let clearId = setTimeout(() => {
				dispatch({ type: CLEAR_MESSAGE, payload: { message: {} } });
				setMessages({});
				console.log("inside useEffectClearMessage");
			}, 3000);

			return () => {
				clearTimeout(clearId);
			};
		}
	}, [dispatch, msg, setMessages]);
};

export default (msg, setMessages) => dispatch => {
	useEffectClearMessage(msg, setMessages, dispatch);
};
