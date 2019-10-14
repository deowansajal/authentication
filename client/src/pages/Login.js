import React, { useState } from "react";

import { connect } from "react-redux";
import InputField from "../components/InputField";
import PrimaryButton from "../components/PrimaryButton";
import { login } from "../store/actions/authActions";
import Message from "../utils/Message";
import useEffectClearMessage from "../utils/useEffectClearMessage";
import useStateError from "../utils/useStateError";
import useStateMessage from "../utils/useStateMessage";
import LinkButton from "../components/LinkButton";

const Login = ({
	login,
	loginError,
	messages,
	history,
	useEffectClearMessage
}) => {
	const [user, setUser] = useState({});

	//Custom useState  Hook to  Set Message
	const [msg, setMessages] = useStateMessage(messages);

	//Custom useEffect  Hook to  Clear Message
	useEffectClearMessage(messages, setMessages);

	//Custom useState  Hook to  Set Error
	const error = useStateError(loginError);

	const changeHandler = e => {
		setUser({
			...user,
			[e.target.name]: e.target.value
		});
	};

	const submitHandler = e => {
		console.log(history);
		e.preventDefault();
		login(user, history);
	};

	return (
		<form onSubmit={submitHandler} className="mt-5 pt-5">
			<div className="row mt-5">
				<div className="col-md-6 m-auto">
					<Message msg={msg.registerSuccess} />

					{/* {errMsg && <p className="lead">{errMsg}</p>} */}
					<h1 className="display-4 text-center mb-3">LOGIN</h1>
					<InputField
						type="email"
						name="email"
						placeholder="Email..."
						changeHandler={changeHandler}
						error={error.emailError}
					/>

					<InputField
						type="password"
						name="password"
						placeholder="Password..."
						changeHandler={changeHandler}
						error={error.passwordError}
					/>

					<PrimaryButton type="submit" text="LOGIN" />

					<LinkButton
						text="Don't Have An Account"
						linkText="Register"
						url="register"
					/>
				</div>
			</div>
		</form>
	);
};

const mapStateToProps = ({ auth }) => ({
	messages: auth.messages,
	loginError: auth.loginError
});

export default connect(
	mapStateToProps,
	{ login, useEffectClearMessage }
)(Login);
