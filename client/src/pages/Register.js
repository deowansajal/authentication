import React, { useState } from "react";

import { connect } from "react-redux";
import InputField from "../components/InputField";
import PrimaryButton from "../components/PrimaryButton";
import { register } from "../store/actions/authActions";
import useStateError from "../utils/useStateError";
import LinkButton from "../components/LinkButton";

const Register = ({ register, registerError, history }) => {
	const [user, setUser] = useState({});
	const error = useStateError(registerError);

	const changeHandler = e => {
		setUser({
			...user,
			[e.target.name]: e.target.value
		});
	};

	const submitHandler = e => {
		e.preventDefault();
		register(user, history);
	};

	return (
		<form onSubmit={submitHandler} className="mt-5 pt-5">
			<div className="row mt-5 ">
				<div className="col-md-6 mx-auto">
					<h1 className="display-4 text-center mb-3">REGISTER </h1>
					<InputField
						type="text"
						name="name"
						placeholder="Name..."
						changeHandler={changeHandler}
						error={error.nameError}
						value={user.name}
					/>

					<InputField
						type="email"
						name="email"
						placeholder="Email..."
						changeHandler={changeHandler}
						error={error.emailError}
						value={user.email}
					/>
					<InputField
						type="password"
						name="password"
						placeholder="Password..."
						changeHandler={changeHandler}
						error={error.passwordError}
						value={user.passwordError}
					/>
					<InputField
						type="password"
						name="confirmPassword"
						placeholder="ConfirmPassword..."
						changeHandler={changeHandler}
						error={error.confirmPasswordError}
						value={user.confirmPassword}
					/>
					<PrimaryButton type="submit" text="SUBMIT" />
					<LinkButton
						text="Already Have An Account"
						linkText="Login"
						url="login"
					/>
				</div>
			</div>
		</form>
	);
};

const mapStateToProps = ({ auth }) => ({
	messages: auth.messages,
	registerError: auth.errors.registerError
});

export default connect(
	mapStateToProps,
	{ register }
)(Register);
