import React from "react";
import { connect } from "react-redux";
import Message from "../utils/Message";
import useEffectClearMessage from "../utils/useEffectClearMessage";
import useStateMessage from "../utils/useStateMessage";

const Home = ({ messages, useEffectClearMessage }) => {
	// custom useState hook to set messages
	const [msg, setMessages] = useStateMessage(messages);
	// custom useEffect hook to clear message
	useEffectClearMessage(messages, setMessages);

	return (
		<>
			<Message msg={msg.loginSuccess} />
			<h1 className="text-center display-4 mt-5">Welcome to Home</h1>
		</>
	);
};

const mapStateToProps = ({ auth }) => ({
	messages: auth.messages
});

export default connect(
	mapStateToProps,
	{ useEffectClearMessage }
)(Home);
